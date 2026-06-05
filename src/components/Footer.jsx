import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <h3>Chennai Tools</h3>
          <p>
            Trusted Paper Cup Machine Manufacturer &
            Spare Parts Supplier Since 2007.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Machines</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>7604876048</p>
          <p>9884076048</p>
          <p>chennaitoolssales@gmail.com</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Chennai Tools. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;