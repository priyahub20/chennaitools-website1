import { Link } from "react-router-dom";
import { machines } from "../data/machines";
import "../styles/Machines.css";

function FeaturedMachines() {
  return (
    <section className="featured-machines">
      <div className="container">

        <div className="section-title">
          <h2>Our Machines</h2>
          <p>
            High-performance paper cup machines designed for
            reliability, speed, and industrial productivity.
          </p>
        </div>

        <div className="machines-grid">
          {machines.map((machine) => (
            <div className="machine-card" key={machine.id}>
              <img
                src={machine.image}
                alt={machine.name}
              />

              <div className="machine-content">
                <h3>{machine.name}</h3>

                <p>{machine.speed}</p>

                <Link
                  to={`/machines/${machine.id}`}
                  className="machine-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedMachines;