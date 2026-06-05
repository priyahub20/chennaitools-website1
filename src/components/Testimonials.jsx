import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <h2>What Our Customers Say</h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              Chennai Tools provided excellent machine quality and
              timely support. Highly recommended.
            </p>
            <h4>- Senthil Madurai</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Reliable machines with good production output and
              low maintenance costs.
            </p>
            <h4>- Vinoth Kerala</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Professional service and genuine spare parts.
              Very satisfied with the support.
            </p>
            <h4>- Abishek Pune</h4>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;