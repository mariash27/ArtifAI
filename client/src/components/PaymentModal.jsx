import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

// Modern Payment Modal UI
const PaymentModal = ({ plan, onClose }) => {
  const { backendUrl, token, loadCreditsData } = useContext(AppContext);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Visa");
  const [loading, setLoading] = useState(false);

  // Input Validation
  const isCardNumberValid = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
  const isExpiryDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
  const isCvvValid = /^\d{3}$/.test(cvv);
  const isCardHolderValid = cardHolder.trim().length > 0;

  const isFormValid =
    isCardNumberValid && isExpiryDateValid && isCvvValid && isCardHolderValid;

  // Format Card Number
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1-").replace(/-$/, "");
    setCardNumber(value.substring(0, 19));
  };

  // Format Expiry Date
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setExpiryDate(value.substring(0, 5));
  };

  // Payment Process
  const handlePayment = async () => {
    if (!isFormValid) {
      toast.error("Please fill in all card details correctly.");
      return;
    }
  
    try {
      setLoading(true);
  
      // server req
      const { data } = await axios.post(
        `${backendUrl}/api/user/payment`,
        {
          amount: plan.price,
          credits: plan.credits,
        },
        { headers: { token: token } }
      ); 
  
      // Check server resp
      if (data.success) {
        toast.success("Payment successful!");
        loadCreditsData(); // update credit data
        onClose(); // close modal window
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error); 
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-center text-green-600 mb-2">
          Selected Plan: {plan.id} - ${plan.price}/month
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          {`Free Trial: You won't be charged for 30 days`}
        </p>

        {/* Payment Method Selection */}
        <div className="flex justify-center gap-3 mb-6">
          {["Visa", "MasterCard", "PayPal"].map((method) => (
            <label key={method} className="cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="hidden"
              />
              <img
                src={
                  method === "Visa"
                    ? assets.visa_icon
                    : method === "MasterCard"
                    ? assets.mastercard_payment_icon
                    : assets.paypal_icon
                }
                alt={method}
                className={`w-16 h-10 rounded-lg shadow-md ${
                  paymentMethod === method
                    ? "border-2 border-green-600"
                    : "border border-gray-200"
                }`}
              />
            </label>
          ))}
        </div>

        {/* Form Fields */}
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Card Number (xxxx-xxxx-xxxx-xxxx)"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19}
          className="w-full mb-3 p-3 border rounded-lg"
        />
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength={5}
            className="w-1/2 p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
            maxLength={3}
            className="w-1/2 p-3 border rounded-lg"
          />
        </div>

        {/* Button */}
        <button
          onClick={handlePayment}
          disabled={!isFormValid || loading}
          className="w-full bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Complete Payment"}
        </button>
      </motion.div>
    </div>
  );
};


PaymentModal.propTypes = {
    plan: PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      credits: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default PaymentModal;
