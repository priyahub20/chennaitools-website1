import { Link } from "react-router-dom";
import "../styles/AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-preview-container">

        <div className="about-image">
          <img
            src="machine3.jpeg"
            alt="Chennai Tools"
          />
        </div>

        <div className="about-content">
          <span>ABOUT CHENNAI TOOLS</span>

          <h2>
            Trusted Paper Cup Machine Manufacturer
            Since 2007
          </h2>

          <p>
            Chennai Tools is a trusted manufacturer and supplier
            of high-quality Paper Cup Machines and Spare Parts.
            We provide reliable machinery and durable components
            that help businesses achieve efficient and consistent
            production.
          </p>

          <Link to="/about" className="about-btn">
            Read More
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;