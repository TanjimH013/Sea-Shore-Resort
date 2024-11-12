import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroHomeimg from "../assets/1.HeroHome.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroHomeimg}
        title="Make Your Vacation Memorable"
        text="Choose Your Seaside Sanctuary"
        buttonText="Book Now"
        url="/"
        btnClass="show"
      />
    </>
  );
};

export default Home;
