import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { blogDATA } from "../../../Data/blogDATA";
import { assets } from "../../../assets/assets";

import "./blog.css";

const Blog = () => {
  return (
    <div>
      <div className="container flex justify-between">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="nav-link flex items-center">
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
      <div>
        <img src={assets.blogMain} alt="" />
      </div>

      <div className="blog-describe">
        {blogDATA.map((item, index) => {
          return (
            <div className="blog-card" key={index}>
              <h1>{item.heading}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
