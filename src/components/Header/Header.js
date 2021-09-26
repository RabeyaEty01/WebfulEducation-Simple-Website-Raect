import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import girl from '../../images/background.png';


const Header = () => {
    return (
        <div className="header">
            {/* navbar section  */}

            <nav>
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/blog">Blog</a>
                <a href="/pages">Pages</a>
                <a href="/contact">Contact</a>
                <button>Sign Up</button>
            </nav>

            <img className="logo-img" src={logo} alt="" />

            <div className="header-section">
                <div className="text-part">
                    <h1>Launch your <br />
                        Own online learning <br /> Platform</h1>
                    <p>Unlimited access to all 60+ instructors.</p>
                    <p><small> 2 passes (with access to all classes) for $240</small></p>
                    <h3>Total Budget: 2000 Million</h3>
                    <button>Explore More</button>
                   
                </div>
                <div>
                    <img className="background-girl" src={girl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;