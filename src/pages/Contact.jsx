import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-section">

          <div className="contact-grid">

    <motion.div
  className="contact-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    y: -8,
    scale: 1.02
  }}
>
    <div className="contact-icon">
      <FaPhoneAlt />
    </div>

    <h3>Call Us</h3>

    <a href="tel:7604876048">7604876048</a>
    <a href="tel:9884076048">9884076048</a>

    <span>Sales & Support Team</span>
    </motion.div>

  <div className="contact-card">
    <div className="contact-icon">
      <FaEnvelope />
    </div>

    <h3>Email Us</h3>

    <a href="mailto:chennaitoolssales@gmail.com">
      chennaitoolssales@gmail.com
    </a>

    <span>24 Hour Response</span>
  </div>

  <div className="contact-card">
    <div className="contact-icon">
      <FaInstagram />
    </div>

    <h3>Instagram</h3>

    <a
      href="https://instagram.com/chennaitools_spareparts"
      target="_blank"
      rel="noreferrer"
    >
      @chennaitools_spareparts
    </a>

    <span>Latest Updates & Machines</span>
  </div>

  <div className="contact-card">
    <div className="contact-icon">
      <FaMapMarkerAlt />
    </div>

    <h3>Visit Us</h3>

    <p>
      No.9/5, Kamarajar 1st Cross Street,
      Srinivasa Nagar, Padi,
      Chennai - 600050
    </p>

    <a
      href="https://maps.app.goo.gl/LEUbR7PmTnXEQcwVA"
      target="_blank"
      rel="noreferrer"
      className="location-btn"
    >
      Open Google Maps
    </a>
  </div>

</div>
</section>

      <section className="contact-actions">
        <motion.div
  className="container"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

          <h2>Need Immediate Assistance?</h2>

          <div className="action-buttons">

            <a
  href="https://wa.me/917604876048?text=Hello Chennai Tools, I would like to know more about your paper cup machines."
  target="_blank"
  rel="noreferrer"
  className="whatsapp-btn"
>
  <FaWhatsapp />
  WhatsApp Now
</a>

          </div>

        </motion.div>
      </section>

      <section className="map-section">
  <div className="container">

    <h2>Our Location</h2>

    <iframe
      title="Chennai Tools Location"
      src="https://www.google.com/maps?q=No.9/5,Kamarajar+1st+Cross+Street,Srinivasa+Nagar,Padi,Chennai+600050&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>

  </div>
</section>

      <section className="business-hours">

  <div className="container">

    <motion.div
  className="hours-card"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

      <FaClock className="hours-icon" />

      <h2>Business Hours</h2>

      <p>Monday - Saturday : 9:00 AM - 7:00 PM</p>

      <p>Sunday : By Appointment</p>

    </motion.div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Contact;