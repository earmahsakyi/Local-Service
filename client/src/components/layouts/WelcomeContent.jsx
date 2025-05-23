import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';

const WelcomeContent = () => {
  return (
    <motion.div
      className="welcome-section"
    initial={{ opacity: 0, y: -50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h1
        className="welcome-heading"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
      >
        Welcome to <span className="highlight">InYourArea</span>
      </motion.h1>

      <motion.p
        className="welcome-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Need a reliable electrician, plumber, cleaner, carpenter or mechanic? You’re in the right place!
        We connect you with trusted local professionals who get the job done  quickly, safely, and affordably.
      </motion.p>
    </motion.div>
  );
};

export default WelcomeContent;
