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
const Header = () => {
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
    return (<framer_motion_1.motion.div className="flex flex-col justify-center items-center text-center my-20 px-5" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
      {/* Badge */}
      <framer_motion_1.motion.div className="text-stone-500 inline-flex text-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
        <p>Best text-to-image generator</p>
        <img src={assets_1.assets.star_icon} alt="Star"/>
      </framer_motion_1.motion.div>

      {/* Heading */}
      <framer_motion_1.motion.h1 className="text-5xl sm:text-7xl font-bold text-gray-800 mt-10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
        Turn text to{" "}
        <framer_motion_1.motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1.2 }}>
          image
        </framer_motion_1.motion.span>
        , in seconds
      </framer_motion_1.motion.h1>

      {/* Description */}
      <framer_motion_1.motion.p className="text-center max-w-xl mx-auto mt-5 text-gray-500 sm:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </framer_motion_1.motion.p>

      {/* Button */}
      <framer_motion_1.motion.button onClick={onClickHandler} className="text-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
        Generate Images
        <img className="h-6" src={assets_1.assets.star_group} alt="Star"/>
      </framer_motion_1.motion.button>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-5">
        {Array(6)
            .fill("")
            .map((item, index) => (<framer_motion_1.motion.img className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-md" src={index % 2 === 0 ? assets_1.assets.sample_img_1 : assets_1.assets.sample_img_2} alt="" key={index} width={100} height={100} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}/>))}
      </div>

      {/* Footer Text */}
      <framer_motion_1.motion.p className="mt-8 text-neutral-600 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        Generated images from Imagify
      </framer_motion_1.motion.p>
    </framer_motion_1.motion.div>);
};
exports.default = Header;
//# sourceMappingURL=Header.js.map