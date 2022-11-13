import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <a href="#">StayHealthy</a>
                    <div className="header--general__items">
                        <a href="#">Home</a>
                        <a href="#">Program</a>
                        <a href="#">Nutritions</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                    </div>
                    <button className="header--general__btn">Join Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;