import React from 'react';
import Hero from "./hero/Hero";
import Programs from "./programs/Programs";
import Nutrition from "./nutrition/Nutrition";
import Pricing from "./pricing/Pricing";
import About from "./about/About";
import Cta from "./CTA/Cta";

const Home = () => {
    return (
        <>
            <Hero/>
            <Programs/>
            <Nutrition/>
            <Pricing/>
            <About/>
            <Cta/>
        </>
    );
};

export default Home;