import React from "react";
import "../styles/navBar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <h1>Spacestagram</h1>
      </div>
      <div className="header">
        <h4>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</h4>
      </div>
    </nav>
  );
}

export default NavBar;
