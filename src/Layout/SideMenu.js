import React from "react";
import { Redirect } from "react-router";

function SideMenu() {
  return (
    <nav id="sidebar" style={SideMenuStyle}>
      <div class="sidebar-header">
        <h3>Menu</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Brands</p>
        <li>
          <a href="#">Lech</a>
        </li>
        <li>
          <a href="#">Fortuna</a>
        </li>
        <li>
          <a href="#">Żubr</a>
        </li>
        <li>
          <a href="#">Tyskie</a>
        </li>
        <li>
          <a href="#">Miłosław</a>
        </li>
      </ul>
    </nav>
  );
}

const SideMenuStyle = {
  background: "rgba(245, 171, 53, .6)",
  marginRight: "20px",
  maxWidth: "200px",
  minWidth: "200px",
  padding: "10px"
};

export default SideMenu;
