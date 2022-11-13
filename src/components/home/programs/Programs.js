import React from 'react';
import photo3 from "../../../asstests/img/photo3.png"


import Slider from "react-slick";

const Programs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
    };


    return (
        <section id="programs">
            <div className="container">
                <div className="programs">
                    <div className="programs--general">
                        <h1>programs</h1>
                        <h2>We Have a programs to help your workouts</h2>
                        <div className="programs--general__group">
                            <Slider {...settings}>
                                <div className="programs--general__group--block">
                                    <img src={photo3} alt=""/>
                                    <div className="programs--general__group--block__item">
                                        <h3>Full Body Workout</h3>
                                        <h4>By The Rock</h4>
                                        <p>You can do it in your own home, all in under 30 <br/>mins? just need a mat
                                            and som . . .</p>
                                        <span>Check out this program!<i
                                            className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className="programs--general__group--block">
                                    <img src={photo3} alt=""/>
                                    <div className="programs--general__group--block__item">
                                        <h3>Full Body Workout</h3>
                                        <h4>By The Rock</h4>
                                        <p>You can do it in your own home, all in under 30 <br/>mins? just need a mat
                                            and som . . .</p>
                                        <span>Check out this program!<i
                                            className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className="programs--general__group--block">
                                    <img src={photo3} alt=""/>
                                    <div className="programs--general__group--block__item">
                                        <h3>Full Body Workout</h3>
                                        <h4>By The Rock</h4>
                                        <p>You can do it in your own home, all in under 30 <br/>mins? just need a mat
                                            and som . . .</p>
                                        <span>Check out this program!<i
                                            className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                                <div className="programs--general__group--block">
                                    <img src={photo3} alt=""/>
                                    <div className="programs--general__group--block__item">
                                        <h3>Full Body Workout</h3>
                                        <h4>By The Rock</h4>
                                        <p>You can do it in your own home, all in under 30 <br/>mins? just need a mat
                                            and som . . .</p>
                                        <span>Check out this program!<i
                                            className="fa-sharp fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;