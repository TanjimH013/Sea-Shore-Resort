import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Service from "./routes/Service.jsx";
import Contact from "./routes/Contact.jsx";
import Blog from "./routes/Blog.jsx";

import "./style.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
