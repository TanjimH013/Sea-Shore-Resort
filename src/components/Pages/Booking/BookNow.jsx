import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./bookNow.css";

const BookNow = () => {
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
              <NavLink to="book-now">
                <Link to="/book-now">Book Now</Link>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
