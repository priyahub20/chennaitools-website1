import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          Serving Manufacturers Across India Since 2007
        </span>

        <h1>
          Powering Paper Cup Manufacturing with Reliable Machines &
          Genuine Spare Parts
        </h1>

        <p>
          Chennai Tools delivers high-performance paper cup machines,
          genuine spare parts and technical support trusted by
          manufacturers across India.
        </p>

        <div className="hero-buttons">

          <Link to="/machines" className="primary-btn">
            Explore Machines
          </Link>

          <Link to="/about" className="secondary-btn">
  About Us
</Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;