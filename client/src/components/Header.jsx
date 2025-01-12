import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Accessing user state and navigation
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  // Handle button click
  const onClickHandler = () => {
    if (user) {
      navigate("/result"); // Navigate to the result page if user is logged in
    } else {
      setShowLogin(true); // Open login modal if user is not logged in
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Badge Section */}
      <motion.div
        className="inline-flex text-center gap-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best text-to-image generator</p>
        <img src={assets.star_icon} alt="Star" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl sm:text-7xl font-bold text-black mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Turn text to{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          image
        </motion.span>
        , in seconds
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-center max-w-xl mx-auto mt-5 text-black sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </motion.p>

      {/* Generate Images Button */}
      <motion.button
        onClick={onClickHandler}
        // Button styling and animations
        className="text-lg text-white bg-gradient-to-r from-green-400 to-green-600 w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Star" />
      </motion.button>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-5">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={100}
              height={100}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
            />
          ))}
      </div>

      {/* Footer Text */}
      <motion.p
        className="mt-8 text-black text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Generated images from ArtifAI
      </motion.p>
    </motion.div>
  );
};

export default Header;
