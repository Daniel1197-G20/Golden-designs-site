import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import profilep from '../assets/profilep.jpeg';

const About = () => {
  const lines = [
    "I’m a graphic designer who loves turning ideas into clean, creative visuals. From logos to flyers and social media designs, I help brands stand out with designs that speak.",
    "Let’s create something awesome together. I’m a designer with a background in editorial and brand systems. I love working on projects that require concept-led visual storytelling and turning complex ideas into beautiful, functional experiences."
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
          {/* Text Content */}
          <div className="about-text ai-typing">
            {lines.map((line, i) => (
              <SweetTyping key={i} text={line} delay={i * 1.8} />
            ))}

            <motion.a
              href="#contact"
              className="btn mt-10 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: lines.length * 1.8 + 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Session
            </motion.a>
          </div>

          {/* Rounded Portrait Image */}
          <motion.div
            className="about-img-container"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="about-img-wrapper-rounded">
              <img
                src={profilep}
                alt="Portrait"
                className="about-profile-img-rounded"
              />
              {/* Subtle glow overlay on hover */}
              <div className="img-glow-rounded"></div>
            </div>
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
      className="leading-relaxed text-lg mb-6"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.08,
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