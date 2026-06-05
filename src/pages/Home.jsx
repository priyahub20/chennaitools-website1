import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedMachines from "../components/FeaturedMachines";
import AboutPreview from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMachines />
      <AboutPreview />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;