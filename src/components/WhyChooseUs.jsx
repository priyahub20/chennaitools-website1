import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">

        <div className="section-title">
          <h2>Why Choose Chennai Tools?</h2>
        </div>

        <div className="choose-grid">

          <div className="choose-card">
            <h3>Quality Machines</h3>
            <p>
              Built using reliable components for
              long-term industrial performance.
            </p>
          </div>

          <div className="choose-card">
            <h3>Industry Experience</h3>
            <p>
              Serving customers since 2007 with
              proven expertise.
            </p>
          </div>

          <div className="choose-card">
            <h3>Technical Support</h3>
            <p>
              Installation guidance and support
              whenever required.
            </p>
          </div>

          <div className="choose-card">
            <h3>Spare Parts Availability</h3>
            <p>
              Genuine spare parts for smooth and
              uninterrupted production.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;