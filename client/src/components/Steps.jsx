import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  // Animation variants for the container 
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  // Animation variants for individual step items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div className="flex flex-col items-center justify-center my-32 px-5">
      {/* Title Section */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
      >
        How it works
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Transform Words Into Stunning Images
      </motion.p>

      {/* Steps Section */}
      <motion.div
        className="space-y-6 w-full max-w-3xl text-sm"
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
      >
        {/* Iterate over step data */}
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-6 px-8 bg-gradient-to-r from-white to-gray-100 shadow-lg border 
                cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-xl"
            variants={itemVariants} // Animation for each step
          >
            {/* Step Icon */}
            <div className="flex items-center justify-center bg-blue-500/10 rounded-full p-3">
              <img width={40} src={item.icon} alt="" />
            </div>
            {/* Step Text */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Steps;
