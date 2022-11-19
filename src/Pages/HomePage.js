import React from "react";
import Banner from "../Components/HomePage/Banner";
import Navigation from "../Components/HomePage/Navigation";
import WelcomeCarousel from "../Components/HomePage/WelcomeCarousel";

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <WelcomeCarousel />
        </div>
    );
};

export default HomePage;
