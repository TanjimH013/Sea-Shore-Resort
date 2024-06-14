import { NavLink, Link } from "react-router-dom";
import "./our-services.css";
import Logo from "../Logo/Logo";

const OurServices = () => {
  return (
    <div>
      <div className="container flex justify-between">
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
              <NavLink to="booking-now">
                <Link to="/booking-now">Booking Now</Link>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="our-services text-3xl">I'm Our Services page</h1>
      <button>
        <Link to="/">⬅ Go Home</Link>
      </button>
    </div>
  );
};

export default OurServices;
