import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroHomeimg from "../assets/2.HeroHome.png";
import { MenuItems } from "../components/MenuItems";

const Home = () => {
  const bookTitle = MenuItems[MenuItems.length - 1].title;
  const bookUrl = MenuItems[MenuItems.length - 1].url;
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroHomeimg}
        title="Make Your Vacation Memorable"
        text="Choose Your Seaside Sanctuary"
        buttonText={bookTitle}
        url={bookUrl}
        btnClass="show"
      />
    </>
  );
};

export default Home;
