"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AppContext_1 = require("../context/AppContext");
const axios_1 = __importDefault(require("axios"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_toastify_1 = require("react-toastify");
const framer_motion_1 = require("framer-motion");
const assets_1 = require("../assets/assets");
// Modern Payment Modal UI
const PaymentModal = ({ plan, onClose }) => {
    const { backendUrl, token, loadCreditsData } = (0, react_1.useContext)(AppContext_1.AppContext);
    const [cardNumber, setCardNumber] = (0, react_1.useState)("");
    const [expiryDate, setExpiryDate] = (0, react_1.useState)("");
    const [cvv, setCvv] = (0, react_1.useState)("");
    const [cardHolder, setCardHolder] = (0, react_1.useState)("");
    const [coupon, setCoupon] = (0, react_1.useState)("");
    const [paymentMethod, setPaymentMethod] = (0, react_1.useState)("Visa");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [showConfirmExit, setShowConfirmExit] = (0, react_1.useState)(false);
    // Input Validation
    const isCardNumberValid = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    const isExpiryDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    const isCvvValid = /^\d{3}$/.test(cvv);
    const isCardHolderValid = cardHolder.trim().length > 0;
    const isFormValid = isCardNumberValid && isExpiryDateValid && isCvvValid && isCardHolderValid;
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
    const handlePayment = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!isFormValid) {
            react_toastify_1.toast.error("Please fill in all card details correctly.");
            return;
        }
        try {
            setLoading(true);
            const { data } = yield axios_1.default.post(`${backendUrl}/api/user/payment`, {
                amount: plan.price,
                credits: plan.credits
            }, { headers: { token: token } } // Убедитесь, что передаете токен в заголовках
            );
            if (data.success) {
                react_toastify_1.toast.success("Payment successful!");
                loadCreditsData();
                onClose();
            }
            else {
                react_toastify_1.toast.error(data.message);
            }
        }
        catch (error) {
            console.error(error);
            react_toastify_1.toast.error("Payment failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
    });
    return (<div id="modal-overlay" className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <framer_motion_1.motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
          ✖
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-center text-blue-600 mb-2">
          Selected Plan: {plan.id} - ${plan.price}/month
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Free Trial: You won't be charged for 30 days
        </p>

        {/* Payment Method Selection */}
        <div className="flex justify-center gap-3 mb-6">
          {["Visa", "MasterCard", "PayPal"].map((method) => (<label key={method} className="cursor-pointer">
              <input type="radio" name="paymentMethod" value={method} checked={paymentMethod === method} onChange={() => setPaymentMethod(method)} className="hidden"/>
              <img src={method === "Visa"
                ? assets_1.assets.visa_icon
                : method === "MasterCard"
                    ? assets_1.assets.mastercard_payment_icon
                    : assets_1.assets.paypal_icon} alt={method} className={`w-16 h-10 rounded-lg shadow-md ${paymentMethod === method
                ? "border-2 border-blue-500"
                : "border border-gray-200"}`}/>
            </label>))}
        </div>

        {/* Form Fields */}
        <input type="text" placeholder="Cardholder Name" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} className="w-full mb-3 p-3 border rounded-lg"/>
        <input type="text" placeholder="Card Number (xxxx-xxxx-xxxx-xxxx)" value={cardNumber} onChange={handleCardNumberChange} maxLength={19} className="w-full mb-3 p-3 border rounded-lg"/>
        <div className="flex gap-3 mb-4">
          <input type="text" placeholder="MM/YY" value={expiryDate} onChange={handleExpiryDateChange} maxLength={5} className="w-1/2 p-3 border rounded-lg"/>
          <input type="password" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))} maxLength={3} className="w-1/2 p-3 border rounded-lg"/>
        </div>

        {/* Button */}
        <button onClick={handlePayment} disabled={!isFormValid || loading} className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed">
          {loading ? "Processing..." : "Complete Payment"}
        </button>
      </framer_motion_1.motion.div>
    </div>);
};
PaymentModal.propTypes = {
    plan: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        price: prop_types_1.default.number.isRequired,
        credits: prop_types_1.default.number.isRequired,
    }).isRequired,
    onClose: prop_types_1.default.func.isRequired,
};
exports.default = PaymentModal;
//# sourceMappingURL=PaymentModal.js.map