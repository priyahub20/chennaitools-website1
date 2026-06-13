import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/machines" onClick={() => setMenuOpen(false)}>Machines</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <a
          href="https://wa.me/917604876048"
          target="_blank"
          rel="noreferrer"
          className="quote-btn"
        >
          <FaWhatsapp />
          <span>Open App</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;