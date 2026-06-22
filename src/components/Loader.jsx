import logo from "../assets/logo.png";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-screen">

      <div className="loader-content">

        <img
          src={logo}
          alt="Chennai Tools"
          className="loader-logo"
        />

        <h1>CHENNAI TOOLS</h1>

        <p>Paper Cup Machines & Spare Parts</p>

        <div className="loader-bar">
          <span></span>
        </div>

      </div>

    </div>
  );
}

export default Loader;