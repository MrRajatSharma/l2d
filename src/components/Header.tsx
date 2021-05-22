import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
export default () => (
  <header id="header">
  <div className="container d-flex align-items-center justify-content-between">

    <div id="logo" className="float-left">
      {/* <h1><a href="/" className="scrollto">Learn<span>2</span>Motor</a></h1> */}

      <a href="#body"><img src="logo2.jpg" alt="Drive 2 Motor " title="Drive 2 Motor" /></a>
    </div>

    <nav id="nav-menu-container" className="d-flex align-items-center ">
      <ul className="nav-menu">
        <li className="menu-active"><a href="/">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="tel:+916005488940" className="btn btn-outline-primary ml-3"><FontAwesomeIcon icon={faPhone} /> Call us now</a>
    </nav>
  </div>
</header>
)