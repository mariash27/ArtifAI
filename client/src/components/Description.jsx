import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      // Container for the description section with animation on load
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.h1
        // Main heading with animation
        className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Create AI Images
      </motion.h1>

      <motion.p
        // Subtitle with animation
        className="text-gray-500 text-lg mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Turn your imagination into visuals
      </motion.p>

      <motion.div
        // Main content container with animations
        className="flex flex-col gap-10 md:gap-14 md:flex-row items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Animated image */}
        <motion.img
          src={assets.sample_img_1}
          alt="AI Generated"
          className="w-80 xl:w-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.1 }}
        />

        {/* Animated text content */}
        <motion.div
          // Animation for the text block
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
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
          {`Simply type in a text prompt, and our cutting-edge AI will generate
          high-quality images in seconds. From product visuals to character
          designs and portraits. Even concepts that don't yet exist can be
          visualized effortlessly. Powered by advanced AI technology, the
          creative possibilities are limitless!`}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Description;
