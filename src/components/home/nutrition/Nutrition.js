import React from 'react';
import group from "../../../asstests/img/group.png"
import group2 from "../../../asstests/img/group2.png"
import trophy1 from "../../../asstests/img/trophy 1.svg"
import time from "../../../asstests/img/time.svg"

const Nutrition = () => {
    return (
        <section id="nutrition">
            <div className="container">
                <div className="nutrition--general">
                    <div className="nutrition--general__block">
                        <div className="nutrition--general__block--title">
                            <div className="nutrition--general__block--title__cup">
                                <div className="nutrition--general__block--title__cup--group">
                                    <div  className="nutrition--general__block--title__cup--group__use">
                                        <img src={trophy1} alt=""/>
                                        <h1>Discipline</h1>
                                    </div>
                                </div>
                                <img src={group} alt=""/>
                            </div>
                            <div className="nutrition--general__block--title__cup">
                                <img src={group2} alt=""/>
                                <div className="nutrition--general__block--title__cup--group2">
                                    <div  className="nutrition--general__block--title__cup--group2__use2">
                                        <img src={time} alt=""/>
                                        <h1>Discipline</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="nutrition--general__block--body">
                            <h1>Nutritions</h1>
                            <h2>meal preparation for workout</h2>
                            <p>Don’t worry we have the best nutritionist for your workout, firstly consult with our experts,
                                we can make your meal preparation based on Total Daily Energy Expenditure.</p>
                            <button>Join Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nutrition;