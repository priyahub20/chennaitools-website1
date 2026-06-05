import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="logo">

          <img src={logo} alt="Chennai Tools" />

          <div className="logo-text">
            <h2>CHENNAI TOOLS</h2>
            <span>Paper Cup Machines & Spare Parts</span>
          </div>

        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/machines">Machines</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <a
  href="https://wa.me/917604876048"
  target="_blank"
  rel="noreferrer"
  className="quote-btn"
>
  <FaWhatsapp />
  Open app
</a>

      </div>
    </header>
  );
}

export default Navbar;