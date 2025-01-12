import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
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
    <div className="pb-16 text-center">
      {/* Title Section */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        See the magic. Try now
      </motion.h1>

      {/* Button Section */}
      <motion.button
        onClick={onClickHandler}
        // Button styling and animations
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white m-auto hover:scale-105 shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Generate Images
        <img
          src={assets.star_group}
          alt="Star"
          className="h-6"
        />
      </motion.button>
    </div>
  );
};

export default GenerateBtn;
