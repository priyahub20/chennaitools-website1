import "../styles/ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">

        <h2>Need a Paper Cup Machine?</h2>

        <p>
          Feel free to contact Chennai Tools today for machine details,
          specifications and support.
        </p>

        <a
          href="https://wa.me/917604876048"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Contact now
        </a>

      </div>
    </section>
  );
}

export default ContactCTA;