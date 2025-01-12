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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const assets_1 = require("../assets/assets");
const AppContext_1 = require("../context/AppContext");
const PaymentModal_1 = __importDefault(require("../components/PaymentModal"));
const ByuCredit = () => {
    const { user } = (0, react_1.useContext)(AppContext_1.AppContext);
    const [selectedPlan, setSelectedPlan] = (0, react_1.useState)(null); // Хранит выбранный план для оплаты
    const [showPaymentModal, setShowPaymentModal] = (0, react_1.useState)(false); // Отображение модального окна
    const handlePurchase = (plan) => {
        setSelectedPlan(plan);
        setShowPaymentModal(true);
    };
    return (<div className="min-h-[80vh] text-center pt-14 pb-10 px-4">
      {/* Заголовок и кнопка */}
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 text-gray-700 hover:bg-gray-100 transition">
        Our Plans
      </button>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 sm:mb-10">
        Choose the Plan
      </h1>

      {/* Карточки с планами */}
      <div className="flex flex-wrap justify-center gap-8 text-left">
        {assets_1.plans.map((item, index) => (<div key={index} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm hover:scale-105 hover:shadow-xl transition-transform duration-300">
            {/* Логотип и заголовок */}
            <div className="flex items-center gap-4">
              <img width={40} src={assets_1.assets.logo_icon} alt="Plan Icon"/>
              <p className="text-lg font-semibold text-gray-800">{item.id}</p>
            </div>

            {/* Описание */}
            <p className="text-sm text-gray-600 mt-3">{item.desc}</p>

            {/* Цена и кредиты */}
            <p className="mt-6 text-gray-800">
              <span className="text-3xl font-bold text-blue-600">${item.price}</span>{" "}
              <span className="text-sm">/ {item.credits} credits</span>
            </p>

            {/* Кнопка действия */}
            <button onClick={() => handlePurchase(item)} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-8 text-sm rounded-full py-3 font-medium hover:shadow-lg transition-all">
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>))}
      </div>

      {/* Модальное окно оплаты */}
      {showPaymentModal && (<PaymentModal_1.default plan={selectedPlan} onClose={() => setShowPaymentModal(false)}/>)}
    </div>);
};
exports.default = ByuCredit;
//# sourceMappingURL=ByuCredit.js.map