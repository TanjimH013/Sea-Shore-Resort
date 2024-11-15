import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BlogImg from "../assets/7.BlogImg.png";
import "./blogStyles.css";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-blog" heroImg={BlogImg} title="Blog" />
    </>
  );
};

export default Blog;
