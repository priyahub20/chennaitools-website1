import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

       <NavLink to="/machines" onClick={() => setMenuOpen(false)}>
         Machines
      </NavLink>
  
      <NavLink to="/about" onClick={() => setMenuOpen(false)}>
        About
      </NavLink>

      <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
        Contact
      </NavLink>
      </nav>


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