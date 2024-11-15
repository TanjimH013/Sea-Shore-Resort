import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BookingImg from "../assets/1.HeroHome.png";

import "./bookingStyles.css";

const Booking = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-booking" heroImg={BookingImg} title="Book Now" />
    </>
  );
};

export default Booking;
