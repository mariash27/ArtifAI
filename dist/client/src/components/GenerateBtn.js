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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const assets_1 = require("../assets/assets");
const framer_motion_1 = require("framer-motion");
const AppContext_1 = require("../context/AppContext");
const react_router_dom_1 = require("react-router-dom");
const GenerateBtn = () => {
    const { user, setShowLogin } = (0, react_1.useContext)(AppContext_1.AppContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onClickHandler = () => {
        if (user) {
            navigate("/result");
        }
        else {
            setShowLogin(true);
        }
    };
    return (<div className="pb-16 text-center">
      {/* Заголовок */}
      <framer_motion_1.motion.h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        See the magic. Try now
      </framer_motion_1.motion.h1>

      {/* Кнопка */}
      <framer_motion_1.motion.button onClick={onClickHandler} className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white m-auto hover:scale-105 shadow-lg transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
        Generate Images
        <img src={assets_1.assets.star_group} alt="Star" className="h-6"/>
      </framer_motion_1.motion.button>
    </div>);
};
exports.default = GenerateBtn;
//# sourceMappingURL=GenerateBtn.js.map