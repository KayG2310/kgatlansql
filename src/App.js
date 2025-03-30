import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import BeginnerComponent from "./Beginner";
import AdvancedComponent from "./Advanced";
import Welcome from "./Welcome";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  return (
    
    <div className="home-container">
      <div className="app-container">
            {!showOptions ? (
                <Welcome onComplete={() => setShowOptions(true)} />
            ) : (
                <showOptions />
            )}
        </div>
      {!showOptions ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="welcome-section"
        >
          
          
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="options-section"
        >
          <h2 className="options-title">Choose your experience level:</h2>
          <div className="options-buttons">
            <motion.button
              className="beginner-btn"
              onClick={() => navigate("/beginner")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Beginner
            </motion.button>
            <motion.button
              className="advanced-btn"
              onClick={() => navigate("/advanced")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Advanced
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beginner" element={<BeginnerComponent />} />
        <Route path="/advanced" element={<AdvancedComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
