import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#4A90E2" }}
      >
        Hello It's me Jafnaaaaa
      </motion.h1>
    </div>
  );
};

export default Home;
