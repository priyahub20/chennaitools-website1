import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { machines } from "../data/machines";
import "../styles/MachineDetails.css";

function MachineDetails() {
  const { id } = useParams();

  const machine = machines.find((item) => item.id === id);

  if (!machine) {
    return <h2>Machine Not Found</h2>;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Chennai Tools,

I am interested in the ${machine.name}.

Please share pricing and machine details.`
  );

  return (
    <>
      <Navbar />

      <section className="machine-details">
        <div className="container">

          <div className="machine-top">

            <div className="machine-image">
              <img src={machine.image} alt={machine.name} />
            </div>

            <div className="machine-info">

              <h1>{machine.name}</h1>

              {machine.colorVariant && (
  <span className="variant">
    Color Variant: {machine.colorVariant}
  </span>
)}

<div className="machine-stats">

  <div className="stat-box">
    <h3>{machine.speed}</h3>
    <span>Production Speed</span>
  </div>

  <div className="stat-box">
    <h3>{machine.capacity}</h3>
    <span>Production Capacity</span>
  </div>

</div>

              <p>{machine.description}</p>

              <a
                href={`https://wa.me/917604876048?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="enquiry-btn"
              >
                Enquire on WhatsApp
              </a>

            </div>

          </div>

          <div className="features-section">
            <h2>Key Features</h2>

            <div className="features-grid">
              {machine.features.map((feature, index) => (
                <div className="feature-card" key={index}>
                <span>✓</span>
                <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="specifications-section">

            <h2>Technical Specifications</h2>

            <table>
              <tbody>
                {machine.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          <div className="support-section">

            <h2>Warranty & Support</h2>

            <ul>
              <li>1 Year Warranty</li>
              <li>5 Free Service Visits</li>
              <li>Free Installation</li>
              <li>5 Days Operator Training</li>
              <li>Technical Support Available</li>
              <li>50% Advance Payment</li>
              <li>Balance During Delivery</li>
            </ul>

          </div>

        </div>

  </section>
      
      <Footer />
    </>
  );
}

export default MachineDetails;