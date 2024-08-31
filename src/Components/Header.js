import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <h1>Gym Website</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
