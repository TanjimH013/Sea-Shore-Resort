import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { blogDATA } from "../../../Data/blogDATA";
import "./blog.css";
import { useEffect, useRef, useState } from "react";

const Blog = () => {
  const [active, setActive] = useState(0);

  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const describeRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;

      blogDATA.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;

      local < 0 ? setActive(blogDATA.length - 1) : setActive(local);
    }
  };

  useEffect(() => {
    contentRef.current.style.bottom = "-100%";
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";

    setTimeout(() => {
      contentRef.current.style.bottom = "0%";
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";

      headingRef.current.innerText = blogDATA[active].heading;

      describeRef.current.innerText = blogDATA[active].description;
    }, 500);
  }, [active]);

  return (
    <div>
      <div className="container gap-72 w-[100%] h-[175px] pr-7 flex justify-between border-b border-[#bbc7]">
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

      <div className="container-blog font-[Poppins] mt-24 rounded-xl relative shadow-lg overflow-hidden">
        <div className="relative w-[100%] h-[600px]">
          {blogDATA.map((item, i) => {
            return (
              <img
                src={item.Image}
                key={i}
                alt="blogImage"
                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active ? "clip-visible" : "clip-hidden"
                }`}
              />
            );
          })}
        </div>
        <div>
          <button ref={prevRef} id="back" onClick={() => Slide("prev")}>
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>
          <button
            ref={nextRef}
            id="forward"
            className="right-0"
            onClick={() => Slide("next")}
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
        <div ref={contentRef} className="content">
          <h1 ref={headingRef} className="text-3xl font-bold text-[#ffff]">
            {blogDATA[0].heading}
          </h1>
          <p ref={describeRef} className=" mt-1.5 text-sm p-3 text-[#ffff]">
            {blogDATA[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
