import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./bookNow.css";
import { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookNow = () => {
  const initialValues = {
    dateArrival: "",
    dateDeparture: "",
    adult: "",
    children: "",
    room: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    address: "",
    city: "",
    state: "",
    country: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const [isSubmit, setIsSubmit] = useState(false);

  const notify = () => {
    isSubmit ? toast("Successfully submitted") : "Enter all information again";
  };

  console.log(isSubmit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
  };

  return (
    <Fragment>
      <div className="container w-[100%] h-40 pt-14 flex justify-between">
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
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-5">
          <h1 className=" text-2xl font-semibold">REQUEST OF RESERVATION</h1>

          <div className="date-card flex gap-8">
            <div className="flex flex-col">
              <label className=" mb-1">Arrival Date *</label>
              <input
                type="date"
                name="dateArrival"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.dateArrival}
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">Departure Date *</label>
              <input
                type="date"
                name="dateDeparture"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.dateDeparture}
              />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className=" mb-1">Number of Adults</label>
              <select
                name="adult"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.adult}
              >
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div
              className="flex
            flex-col"
            >
              <label>Number of Children</label>
              <select
                name="children"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.children}
              >
                <option>select</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div
              className="flex
            flex-col"
            >
              <label className=" mb-1">Number of Room</label>
              <select
                name="room"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.room}
              >
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className=" mb-1">FirstName *</label>
              <input
                type="text"
                name="firstName"
                placeholder="Please Enter Your FirstName"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">LastName *</label>
              <input
                type="text"
                name="lastName"
                placeholder="Please Enter Your LastName"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className=" mb-1">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Please Enter Your E-mail"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">Phone No. *</label>
              <input
                type="text"
                name="phoneNum"
                placeholder="Please Enter Your Phone No"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.phoneNum}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className=" mb-1">Address *</label>
            <textarea
              rows="5"
              name="address"
              placeholder="Your Address"
              className="border w-[1138px] outline-none"
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className=" mb-1">City *</label>
              <input
                type="text"
                name="city"
                placeholder="Please Enter Your City"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.city}
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">State</label>
              <input
                type="text"
                name="state"
                placeholder="Please Enter Your State"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.state}
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">Country *</label>
              <input
                type="text"
                name="country"
                placeholder="Please Enter Your Country"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.country}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={notify}
            className="border rounded w-[100px] h-[40px] bg-[#FF4500] text-white font-semibold cursor-pointer mr-[65%]"
          >
            Book Now
          </button>
        </div>
      </form>

      <footer className="w-[100%] h-96"></footer>
    </Fragment>
  );
};

export default BookNow;
