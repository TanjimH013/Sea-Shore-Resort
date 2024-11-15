import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./aboutStyles.css";
import AboutImg from "../assets/3.AbutImg.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-about" heroImg={AboutImg} title="About" />
    </>
  );
};
export default About;
