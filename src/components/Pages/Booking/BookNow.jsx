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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    const {
      dateArrival,
      dateDeparture,
      adult,
      children,
      room,
      firstName,
      lastName,
      email,
      phoneNum,
      address,
      city,
      state,
      country,
    } = formData;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateArrival,
        dateDeparture,
        adult,
        children,
        room,
        firstName,
        lastName,
        email,
        phoneNum,
        address,
        city,
        state,
        country,
      }),
    };
    const validationErrors = {};
    if (!formData.dateArrival) {
      validationErrors.dateArrival = "Please select Arrival Date";
    }

    setErrors(validationErrors);

    const res = await fetch(
      "https://sea-shore-resort-website-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
      options
    );
    console.log(res);
    if (res) {
      toast("Submitted successfully", formData);
    } else {
      ("Error Occurred");
    }
  };

  // const getData = () => {
  //   toast(formData ? "Submitted successfully" : "enter your info");
  // };
  return (
    <Fragment>
      <div className="container gap-72 w-[100%] h-[175px] pr-7 flex justify-between border-b border-[#bbc7]">
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

      <form method="POST" onSubmit={handleSubmit}>
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
                required
              />
              {errors.dateArrival && <h2>{errors.dateArrival}</h2>}
            </div>
            <div className="flex flex-col">
              <label className=" mb-1">Departure Date *</label>
              <input
                type="date"
                name="dateDeparture"
                className="border px-4 w-[550px] h-11 outline-none"
                onChange={handleChange}
                value={formData.dateDeparture}
                required
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
                required
              >
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </div>

            <div
              className="flex
            flex-col"
            >
              <label className=" mb-1">Number of Children</label>
              <select
                name="children"
                className="border px-4 w-[357px] h-11 outline-none"
                onChange={handleChange}
                value={formData.children}
                required
              >
                <option>select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
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
                required
              >
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border rounded w-[100px] h-[40px] bg-[#FF4500] text-white font-semibold cursor-pointer mt-16 mr-[85%]"
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
