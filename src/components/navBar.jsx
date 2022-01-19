import React from "react";
import "../styles/navBar.css";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <h1>Spacestagram - by IRather</h1>
      </div>
      <div className="header">
        <h4>
          NASA's Astronomy Photo of the Day (APOD) API integration using React
          with Bootstrap grid layout
        </h4>
      </div>
    </nav>
  );
}

export default NavBar;
