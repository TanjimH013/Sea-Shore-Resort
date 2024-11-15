import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/6.ContactImg.png";
import "./contactStyles.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-contact" heroImg={ContactImg} title="Contact" />
    </>
  );
};

export default Contact;
