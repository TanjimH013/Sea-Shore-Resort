import { NavLink, Link } from "react-router-dom";
import "./our-services.css";
import Logo from "../Logo/Logo";

import { Fragment } from "react";

const OurServices = () => {
  return (
    <Fragment>
      <div className="container w-[100%] h-[175px] pr-7 flex justify-between border-b border-[#bbc7]">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="flex items-center">
          <ul className="nav-ul flex items-center gap-10">
            <li>
              <NavLink to="home">
                <Link to="/home">Home</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="blog">
                <Link to="/blog">Blog</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                <Link to="/contact">Contact</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="our-services">
                <Link to="/our-services">Our Services</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to="book-now">
                <Link to="/book-now">Book Now</Link>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-container w-[100%]"></div>
    </Fragment>
  );
};

export default OurServices;
