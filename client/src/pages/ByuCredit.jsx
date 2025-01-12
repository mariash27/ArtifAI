import { useContext, useState } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import PaymentModal from "../components/PaymentModal";

const ByuCredit = () => {
  const { user } = useContext(AppContext);
  const [selectedPlan, setSelectedPlan] = useState(null); // Stores the selected plan for payment
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Controls the visibility of the payment modal

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 pb-10 px-4">
      {/* Header and button */}
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 text-gray-700 hover:bg-gray-100 transition">
        Our Plans
      </button>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 sm:mb-10">
        Choose the Plan
      </h1>

      {/* Plan cards */}
      <div className="flex flex-wrap justify-center gap-8 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {/* Logo and title */}
            <div className="flex items-center gap-4">
              <img width={40} src={assets.logo_icon} alt="Plan Icon" />
              <p className="text-lg font-semibold text-gray-800">{item.id}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-3">{item.desc}</p>

            {/* Price and credits */}
            <p className="mt-6 text-gray-800">
              <span className="text-3xl font-bold text-green-600">${item.price}</span>{" "}
              <span className="text-sm">/ {item.credits} credits</span>
            </p>

            {/* Action button */}
            <button
              onClick={() => handlePurchase(item)}
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white mt-8 text-sm rounded-full py-3 font-medium hover:shadow-lg transition-all"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      {/* Payment modal */}
      {showPaymentModal && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
};

export default ByuCredit;
