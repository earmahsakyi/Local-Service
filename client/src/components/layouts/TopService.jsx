import React from 'react';
import { motion } from 'framer-motion';
import './topServices.css'; 
const topServices = [
  {
    title: "Electrician",
    description: "Need wiring, lights, or fans fixed? Find expert electricians near you.",
    icon: "bolt",
  },
  {
    title: "Plumber",
    description: "Fix leaks, install sinks, and maintain your plumbing system.",
    icon: "plumbing",
  },
  {
    title: "Cleaner",
    description: "Reliable home and office cleaners you can count on.",
    icon: "cleaning_services",
  },
  {
    title: "Mechanic",
    description: "Professional vehicle repair and maintenance services.",
    icon: "build",
  },
   
];

const TopServices = () => {
  return (
    <section className="top-services-section container">
      <h3 className="center-align">Top Services</h3>
      <div className="row">
        {topServices.map((service, index) => (
          <motion.div
            className="col s12 m6 l3"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card z-depth-3 service-card">
              <div className="card-content center-align">
                <i className="material-icons large blue-text text-darken-2">{service.icon}</i>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
