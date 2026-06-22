import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import Machines from "./pages/Machines";
import MachineDetails from "./pages/MachineDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/machines/:id" element={<MachineDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppFloat />
  </>
  );
}

export default App;