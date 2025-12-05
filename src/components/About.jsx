import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import profilep from '../assets/profilep.jpeg';

const About = () => {
  const lines = [
    "I’m a graphic designer who loves turning ideas into clean, creative visuals. From logos to flyers and social media designs, I help brands stand out with designs that speak. Let’s create something awesome together..",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
        
          <div className="about-text ai-typing">
            {lines.map((line, i) => (
              <SweetTyping key={i} text={line} delay={i * 1.6} />
            ))}

            <motion.a
              href="#contact"
              className="btn mt-10 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: lines.length * 1.6 + 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Session
            </motion.a>
          </div>

        
          <motion.div
            className="about-img"
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={profilep}
              alt="Shot by Jemmy"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SweetTyping = ({ text, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="leading-relaxed"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.09,       
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};

export default About;