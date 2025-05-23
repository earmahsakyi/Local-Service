import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css'; // Create this next

const CallToAction = () => {
  return (
    <motion.section
      className="cta-section container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <h4 className="center-align cta-heading">
        Get Started - Find Trusted Local Experts
      </h4>

      <p className="center-align cta-subtext">
        Create your free account and connect with reliable professionals in your area.
      </p>

      <motion.div className="center-align cta-buttons"
        initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}   
      >
        <a href="/signup" className="btn waves-effect waves-light blue lighten-1">
          Get Started
        </a>
        <a href="/provider-signup" className="btn-flat waves-effect">
          Are you a service provider? Join here
        </a>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
