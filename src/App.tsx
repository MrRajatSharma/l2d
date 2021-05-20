import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Toolbar from "./components/Toolbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="App py-3">
            <Toolbar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;