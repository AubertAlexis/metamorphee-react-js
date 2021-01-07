import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/Section/About";
import Event from "../components/Section/Event";
import Pro from "../components/Section/Pro";
import Blog from "../components/Section/Blog";
import Newsletter from "../components/Section/Newsletter";
import Comment from "../components/Section/Comment";

const HomePage = () => {
    return (
        <div className="home">
            <Header />

            <main className="main">

                <About />
                <Event />
                <Pro />
                <Blog />
                <Newsletter />
                <Comment />

            </main>

            <Footer />
        </div>
    );
};

export default HomePage;