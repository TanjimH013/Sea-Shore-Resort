import "./NavbarStyle.css";
import { Component } from "react";
// if we need to extends the Component then we have to use render(), otherwise we don't need.
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nave className="NavbarItems">
        <h1 className="NavbarLogo">Sea-Shore Resort</h1>
        {MenuItems.map((item, index) => {
          return (
            <ul className="NaveMenu">
              <li key={index}>
                <a href={item.url}>
                  <i class={item.icon}></i>
                  {item.title}
                </a>
              </li>
            </ul>
          );
        })}
      </nave>
    );
  }
}

export default Navbar;
