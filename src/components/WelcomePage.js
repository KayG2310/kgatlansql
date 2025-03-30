import { useState } from "react";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const [stage, setStage] = useState("welcome");

  const handleSelection = (type) => {
    if (type === "beginner") {
      setStage("beginner");
    } else {
      setStage("advanced");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2e] to-[#3e3e59]">
      {stage === "welcome" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-10 glassmorphism rounded-xl text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to SQL Play</h1>
          <p className="text-gray-300 mb-6">Choose your experience level</p>
          <button
            className="px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200"
            onClick={() => setStage("selection")}
          >
            Get Started
          </button>
        </motion.div>
      )}

      {stage === "selection" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-10"
        >
          <div
            className="p-8 glassmorphism rounded-xl cursor-pointer hover:scale-105 transition"
            onClick={() => handleSelection("beginner")}
          >
            <h2 className="text-2xl font-semibold text-white">Beginner</h2>
            <p className="text-gray-300">Guided query assistance</p>
          </div>
          <div
            className="p-8 glassmorphism rounded-xl cursor-pointer hover:scale-105 transition"
            onClick={() => handleSelection("advanced")}
          >
            <h2 className="text-2xl font-semibold text-white">Advanced</h2>
            <p className="text-gray-300">Direct SQL execution</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
