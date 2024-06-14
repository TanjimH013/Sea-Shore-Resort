import "./app.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import OurServices from "./components/Pages/OurServices/OurServices";
import BookingNow from "./components/Pages/Booking/BookingNow";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/booking-now" element={<BookingNow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
