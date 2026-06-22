import { Link } from "react-router-dom";
import "../styles/Hero.css";
import { motion } from "framer-motion";
import machineImg from "../assets/ct27-advanced.png";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Serving Manufacturers Across India Since 2007
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Powering Paper Cup Manufacturing with Reliable Machines &
          Genuine Spare Parts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Chennai Tools delivers high-performance paper cup machines,
          genuine spare parts and technical support trusted by
          manufacturers across India.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/machines" className="primary-btn">
            Explore Machines
          </Link>

          <Link to="/about" className="secondary-btn">
            About Us
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Hero;