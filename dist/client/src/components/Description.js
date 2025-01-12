"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const assets_1 = require("../assets/assets");
const framer_motion_1 = require("framer-motion");
const Description = () => {
    return (<framer_motion_1.motion.div className="flex flex-col items-center justify-center my-24 p-6 md:px-28" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Заголовок */}
      <framer_motion_1.motion.h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
        Create AI Images
      </framer_motion_1.motion.h1>
      <framer_motion_1.motion.p className="text-gray-500 text-lg mb-8 text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
        Turn your imagination into visuals
      </framer_motion_1.motion.p>

      {/* Основной контент */}
      <framer_motion_1.motion.div className="flex flex-col gap-10 md:gap-14 md:flex-row items-center" initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
            },
        }}>
        {/* Изображение с анимацией */}
        <framer_motion_1.motion.img src={assets_1.assets.sample_img_1} alt="AI Generated" className="w-80 xl:w-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        }} whileHover={{ scale: 1.1 }}/>

        {/* Текстовое описание */}
        <framer_motion_1.motion.div variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        }}>
          <h2 className="text-3xl font-medium max-w-lg mb-4 text-gray-800">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </framer_motion_1.motion.div>
      </framer_motion_1.motion.div>
    </framer_motion_1.motion.div>);
};
exports.default = Description;
//# sourceMappingURL=Description.js.map