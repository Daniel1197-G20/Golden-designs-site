// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Please enter your name and message");
      return;
    }

    const phoneNumber = "09013439476";

    const text = encodeURIComponent(
      `Hello! I'm ${formData.name}\n\n${formData.message}\n\nLooking forward to hearing from you!`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    alert("Opening WhatsApp... Let's connect!");
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's Work Together
        </motion.h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Get in touch</h3>
            <p>I'm open for branding, and creative projects. Let's build something amazing!</p>

            <div className="contact-details">
              <div className="contact-item">
                <Phone size={22} />
                <span>09013439476</span>
              </div>
              <div className="contact-item">
                <MapPin size={22} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <div className="response-time">
              Typically replies in under 1 hour
            </div>
          </motion.div>

          {/* WhatsApp Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleWhatsAppSend}
            className="contact-form"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <textarea
              rows="7"
              placeholder="Tell me about your project, budget, timeline, or just say hello!"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button type="submit" className="submit-btn">
              <Send size={22} />
              Send Message on WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;