import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/4.ServiceImg.png";
import "./serviceStyles.css";
const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-service" heroImg={ServiceImg} title="Service" />
    </>
  );
};

export default Service;
