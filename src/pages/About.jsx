import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

import ct27 from "../assets/ct27.png";

import { motion } from "framer-motion";
import CountUp from "react-countup";

function About() {
  return (
    <>
      <Navbar />
      <section className="about-company">
  <div className="container about-company-grid">

    <motion.div
    className="about-left"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >

      <h2>
        Trusted Paper Cup Machine Manufacturer Across India
      </h2>

      <p>
        Chennai Tools is a trusted manufacturer and supplier of
        Paper Cup Machines and Spare Parts based in Chennai.
      </p>

      <p>
        For more than 18 years, we have been helping businesses
        improve productivity with reliable machinery, genuine
        spare parts and dedicated technical support.
      </p>

      <div className="about-highlights">

      <div className="highlight-box">
      <h3>18+</h3>
      <span>Years Experience</span>
      </div>

      <div className="highlight-box">
      <h3>500+</h3>
      <span>Customers Served</span>
      </div>

      <div className="highlight-box">
      <h3>24/7</h3>
      <span>Support</span>
      </div>

</div>

    </motion.div>

    <motion.div
    className="about-right"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >
   <img src={ct27} alt="Paper Cup Machine" />
   </motion.div>

  </div>
</section>

      <section className="why-us">
        <div className="container">

          <h2 className="section-title">
            Why Choose Chennai Tools
          </h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>18+ Years Experience</h3>
              <p>Trusted industry experience since 2007.</p>
            </div>

            <div className="why-card">
              <h3>Own Spare Parts Unit</h3>
              <p>Quick availability of genuine spare parts.</p>
            </div>

            <div className="why-card">
              <h3>All India Support</h3>
              <p>Serving customers across India.</p>
            </div>

            <div className="why-card">
              <h3>Multi-Language Support</h3>
              <p>Easy communication and customer assistance.</p>
            </div>

            <div className="why-card">
              <h3>Installation Support</h3>
              <p>Machine installation and operator training.</p>
            </div>

            <div className="why-card">
              <h3>Quality Assurance</h3>
              <p>Reliable machines built for industrial use.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-grid">

          <div className="mission-card">
            <h2>Our Mission</h2>

            <p>
              To provide reliable paper cup machines and quality
              spare parts that help businesses improve productivity,
              reduce downtime and achieve sustainable growth.
            </p>
          </div>

          <div className="mission-card">
            <h2>Our Vision</h2>

            <p>
              To become one of India's most trusted names in the
              paper cup machine industry through innovation,
              quality and customer satisfaction.
            </p>
          </div>

        </div>
      </section>

      <section className="about-video">
  <div className="container">

    <h2>Machine in Action</h2>

    <p>
      Watch our high-speed paper cup machine operating in a real production environment.
    </p>

    <video
  className="about-machine-video"
  controls
  playsInline
  preload="metadata"
>
  <source
    src="/videos/machine-demo.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
</div>
</section>

      <Footer />
    </>
  );
}

export default About;