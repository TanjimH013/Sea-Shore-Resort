import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import React, { useState } from "react";

function Navbar() {
  // Use useState to handle the clicked state
  const [clicked, setClicked] = useState(false);

  // Toggle function to change the clicked state
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="NavbarLogo">Sea Shore Resort</h1>

      <div className="MenuIcon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "NavMenu active" : "NavMenu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;

// import { Component } from "react";
// if we need to extends the Component then we have to use render(), otherwise we don't need.

// class Navbar extends Component {
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//   render() {
//     return (
//       <nav className="NavbarItems">
//         <h1 className="NavbarLogo">Sea Shore Resort</h1>

//         <div className="MenuIcon" onClick={this.handleClick}>
//           <i
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
//         <ul className="NavMenu">
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   <i className={item.icon}></i>
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}

//           <button>Sign Up</button>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
