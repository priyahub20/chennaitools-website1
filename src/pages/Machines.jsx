import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { machines } from "../data/machines";
import bannerImage from "../assets/machines-banner.png";
import "../styles/MachinesPage.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Machines() {
  return (
    <>
      <Navbar />

    <motion.section
  className="best-machine"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="container best-machine-content">

    <div className="best-machine-left">

      <span className="best-tag">
        ⭐ BEST SELLER
      </span>

      <h1>CT 27 ADVANCED</h1>

      <p>
        High Speed Paper Cup Machine engineered for maximum
        productivity, stability and long-term performance.
      </p>

      <div className="feature-row">

        <div className="feature-box">
          <h3>100-120</h3>
          <span>Cups / Minute</span>
        </div>

        <div className="feature-box">
          <h3>10 Mould</h3>
          <span>Open Cam System</span>
        </div>

        <div className="feature-box">
          <h3>Premium</h3>
          <span>Industrial Production</span>
        </div>

      </div>

    </div>

    <motion.div
      className="best-machine-right"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={machines[2]?.image || machines[2].image}
        alt="CT27 Advanced"
      />
    </motion.div>

  </div>
</motion.section>

      {/* Machines */}
      <section className="machines-page">
  <div className="container">

    <motion.div
      className="machines-page-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {machines.map((machine) => (

        <motion.div
          className="machine-page-card"
          key={machine.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >

          <img
            src={machine.image}
            alt={machine.name}
          />

          <div className="machine-page-content">

            <h3>{machine.name}</h3>

            <div className="machine-badges">
              <span>
                {
                  machine.specifications.find(
                    (spec) =>
                      spec.label ===
                      "Production Capacity"
                  )?.value
                }
              </span>

              <span>
                {machine.id === "ct06" ||
                machine.id === "ct23"
                  ? "8 Mould"
                  : "10 Mould"}
              </span>
            </div>

            <p>{machine.shortDescription}</p>

            <Link
              to={`/machines/${machine.id}`}
              className="machine-details-btn"
            >
              View Details
            </Link>

          </div>

        </motion.div>

      ))}

    </motion.div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Machines;
