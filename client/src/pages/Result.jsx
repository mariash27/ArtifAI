import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
    
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
    >
      {/* Image Display Section */}
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img
            src={image}
            alt="Generated Result"
            className="max-w-sm sm:max-w-md rounded-lg shadow-lg"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-green-600 ${
              loading ? "w-full transition-all duration-[5s]" : "w-0"
            }`}
          />
        </motion.div>
        {loading && (
          <motion.p
            className="text-green-600 font-medium mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Generating your image...
          </motion.p>
        )}
      </div>

      {/* Input Section */}
      {!isImageLoaded && (
        <motion.div
          className="flex w-full max-w-xl bg-gray-100 text-gray-800 text-sm p-2 mt-10 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your image idea"
            className="flex-1 bg-transparent outline-none px-6 text-base placeholder-gray-400"
          />
          <button className="bg-gradient-to-r from-green-400 to-green-600 px-8 sm:px-12 py-3 rounded-full font-medium text-white hover:shadow-xl transition-all">
            Generate
          </button>
        </motion.div>
      )}

      {/* Action Buttons Section */}
      {isImageLoaded && (
        <motion.div
          className="flex gap-4 flex-wrap justify-center text-white text-sm p-0.5 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-gray-800 text-white px-8 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all"
          >
            Download
          </a>
        </motion.div>
      )}
    </form>
  );
};

export default Result;
