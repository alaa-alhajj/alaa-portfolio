import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
      />
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loader;
