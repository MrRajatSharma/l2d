import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Toolbar from "./components/Toolbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => (
  <div className="App">
    <Toolbar />
    <Header />
    <Main />
    <Footer />
  </div>
);
