import React from 'react';
import basic from './../../../asstests/img/basic.png'
import standar from './../../../asstests/img/standar.png'
import rock from './../../../asstests/img/rock.png'

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="container">
                <div className="pricing--title">
                    <p>PRICING</p>
                    <h1>CHOOSE YOUR PACKAGE
                        <br/> FOR WORKOUT</h1>
                </div>
                <div className="pricing--general">
                    <div className="pricing--general__block">
                        <h1>Basic</h1>
                        <img src={basic} alt="img"/>
                        <h3>The Rock</h3>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <h2>Rp500.000<span>/month</span> </h2>
                        <button className="pricing--general__block--btn">Workout Now</button>
                    </div>
                    <div className="pricing--general__block">
                        <div className="pricing--general__block--popular">
                            <h6>Popular</h6>
                        </div>
                        <h1>Standar</h1>
                        <img src={standar} alt="img"/>
                        <h3>Anna Jane</h3>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <h2>Rp1.000.000<span>/month</span> </h2>
                        <button className="pricing--general__block--btn">Workout Now</button>
                    </div>
                    <div className="pricing--general__block">
                        <h1>Basic</h1>
                        <img src={rock} alt="img"/>
                        <h3>The Rock</h3>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <div className="pricing--general__block--vector">
                            <div className="pricing--general__block--vector__i">
                                <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <p>3 Times A Week</p>
                        </div>
                        <h2>Rp2.000.000<span>/month</span> </h2>
                        <button className="pricing--general__block--btn">Workout Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;