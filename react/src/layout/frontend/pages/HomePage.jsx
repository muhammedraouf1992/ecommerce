import React from "react";
import Banner from "../components/Banner";
import AboutBoxes from "../components/AboutBoxes";
import FeaturedProducts from "../components/FeaturedProducts";
import MiddleBanner from "../components/MiddleBanner";
import PopularProducts from "../components/PopularProducts";
import PromotionComponent from "../components/PromotionComponent";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <AboutBoxes />
            <FeaturedProducts />
            <MiddleBanner />
            <PopularProducts />
            <PromotionComponent />
            <Footer />
        </div>
    );
};

export default HomePage;
