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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const assets_1 = require("../assets/assets");
const framer_motion_1 = require("framer-motion");
const AppContext_1 = require("../context/AppContext");
const Result = () => {
    const [image, setImage] = (0, react_1.useState)(assets_1.assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = (0, react_1.useState)(false);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [input, setInput] = (0, react_1.useState)("");
    const { generateImage } = (0, react_1.useContext)(AppContext_1.AppContext);
    const onSubmitHandler = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        if (input) {
            const image = yield generateImage(input);
            if (image) {
                setIsImageLoaded(true);
                setImage(image);
            }
        }
        setLoading(false);
    });
    return (<form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center px-4">
      {/* Image Display Section */}
      <div className="relative text-center">
        <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
          <img src={image} alt="Generated Result" className="max-w-sm sm:max-w-md rounded-lg shadow-lg"/>
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[5s]" : "w-0"}`}/>
        </framer_motion_1.motion.div>
        {loading && (<framer_motion_1.motion.p className="text-blue-500 font-medium mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Generating your image...
          </framer_motion_1.motion.p>)}
      </div>

      {/* Input Section */}
      {!isImageLoaded && (<framer_motion_1.motion.div className="flex w-full max-w-xl bg-gray-100 text-gray-800 text-sm p-2 mt-10 rounded-full shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Describe your image idea" className="flex-1 bg-transparent outline-none px-6 text-base placeholder-gray-400"/>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 rounded-full font-medium text-white hover:shadow-xl transition-all">
            Generate
          </button>
        </framer_motion_1.motion.div>)}

      {/* Action Buttons Section */}
      {isImageLoaded && (<framer_motion_1.motion.div className="flex gap-4 flex-wrap justify-center text-white text-sm p-0.5 mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <button onClick={() => setIsImageLoaded(false)} className="bg-gray-800 text-white px-8 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition">
            Generate Another
          </button>
          <a href={image} download className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all">
            Download
          </a>
        </framer_motion_1.motion.div>)}
    </form>);
};
exports.default = Result;
//# sourceMappingURL=Result.js.map