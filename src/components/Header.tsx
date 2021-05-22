import React, { useState } from "react";
export default () => (
  <header id="header">
  <div className="container">

    <div id="logo" className="float-left">
      {/* <h1><a href="/" className="scrollto">Learn<span>2</span>Motor</a></h1> */}

      <a href="#body"><img src="logo2.jpg" alt="" title="" /></a>
    </div>

    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"><a href="#body">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li className="menu-has-children"><a href="">Drop Down</a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
)