import "./NavbarStyle.css";
import { Component } from "react";

// if we need to extends the Component then we have to use render(), otherwise we don't need.

class Navbar extends Component {
  render() {
    return (
      <nave className="NavbarItems">
        <h1 className="NavbarLogo">Sea-Shore Resort</h1>
        <ul className="NaveMenu">
          <li>
            <i class="fa-solid fa-house"></i> Home
          </li>
        </ul>
      </nave>
    );
  }
}

export default Navbar;
