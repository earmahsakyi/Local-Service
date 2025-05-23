import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: 'person_add',
    title: 'Create an Account',
    description: 'Click on "Sign Up" in the navigation bar to get started.',
  },
  {
    icon: 'build',
    title: 'Add Service',
    description: 'Update your profile after creating your account to list your service.',
  },
  {
    icon: 'search',
    title: 'Search for a Service',
    description: 'Use the filter option to find service providers near you.',
  },
  {
    icon: 'event_available',
    title: 'Book Now',
    description: 'Get notified when the provider approves  authentication required!',
  },
];

const Easysteps = () => {
  return (
    <div className="container center-align" style={{ marginTop: '50px' }}>
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book or Add With 3 Easy Steps
      </motion.h3>

      <div className="row">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="col s12 m6 l3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className="card hoverable">
              <div className="card-content">
                <i className="material-icons large">{step.icon}</i>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Easysteps;

