import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <div className="home">
            <Header />

            <div className="container">
                <p>Content of ReactJs starter from HomePage.jsx</p>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;