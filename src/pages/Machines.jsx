import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { machines } from "../data/machines";
import bannerImage from "../assets/machines-banner.png";
import "../styles/MachinesPage.css";

function Machines() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="machines-banner">
        <img
          src={bannerImage}
          alt="Chennai Tools Machines"
        />
      </section>

      {/* Machines */}
      <section className="machines-page">
        <div className="container">

          <div className="machines-page-grid">
            {machines.map((machine) => (
              <div
                className="machine-page-card"
                key={machine.id}
              >
                <img
                  src={machine.image}
                  alt={machine.name}
                />

                <div className="machine-page-content">

                  <h3>{machine.name}</h3>

                  <div className="machine-badges">
                    <span>
                      {
                        machine.specifications.find(
                          (spec) =>
                            spec.label ===
                            "Production Capacity"
                        )?.value
                      }
                    </span>

                    <span>
                      {machine.id === "ct06" ||
                      machine.id === "ct23"
                        ? "8 Mould"
                        : "10 Mould"}
                    </span>
                  </div>

                  <p>{machine.shortDescription}</p>

                  <Link
                    to={`/machines/${machine.id}`}
                    className="machine-details-btn"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Machines;
