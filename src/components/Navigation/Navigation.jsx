import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Pages/Logo/Logo";
import "./navigation.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <Fragment>
      <div className="container flex justify-between">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="nav-link flex items-center">
          <ul className="nav-ul flex items-center gap-10">
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="our-services">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="book-now">Book Now</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mainImg-container">
        <img src={assets.mainImg} alt="" className="mainImg opacity-65" />

        <div className="Img-card mt-5">
          <h1 className=" text-3xl font-extrabold text-black mb-3">
            Welcome to Sea Shore Resort
          </h1>
          <p className="text-black font-semibold">
            Where breathtaking ocean views meet unparalleled luxury.
            <br /> At Sea Shore Resort, we are committed to preserving our
            natural surroundings.
            <br />
            Our eco-friendly practices include reducing plastic use, conserving
            water, and supporting local conservation efforts,
            <br /> ensuring a sustainable and luxurious experience.
          </p>
        </div>
      </div>

      <footer className=" w-full h-14"></footer>
    </Fragment>
  );
};

export default Navbar;
