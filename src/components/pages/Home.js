import React from "react";
import Header from "../structure/Header";
import Content from "../structure/Content";
import Footer from "../structure/Footer";
import "./pages.css";

function Home() {
    return (
        <div className="home">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;