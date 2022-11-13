import React from 'react';
import photo from './../../../asstests/img/photo.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero--general">
                    <div className="hero--general__title">
                        <h1>WELCOME TO THE CLUB</h1>
                        <h2>Choose Your Programs,
                            <br/> Pick Your Meal,
                            <br/> Let’s Get Healthy.</h2>
                        <p>StayHealty provides Online Training, and Consultation About Diet and Exercise tailored based
                            on user needs. We will provide a training model that can be accessed anytime and anywhere
                            with the best trainers.</p>
                        <div className="hero--general__title--btn">
                            <button className="hero--general__title--btn__now">Join Now</button>
                            <button className="hero--general__title--btn__contact">Contact Us</button>
                        </div>
                        <div className="hero--general__title--circle"><i className="fa-solid fa-play"></i></div>
                        <img src={photo} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;