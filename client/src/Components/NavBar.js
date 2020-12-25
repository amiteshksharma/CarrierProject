import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Imgs/Carrier_Logo.png';
import '../Styling/Navbar.css';

export default function NavBar(props) {
    return (
        <div className="navbar-div" >
            {/* All items on the left side of the navbar */}
            <section className="navbar-items-left">
                {/* The logo located on the navbar*/}
                <div className="navbar-logo">
                    <img src={Logo} width={45} />
                </div>

                <div className="navbar-item-link">
                    <div className="item-link">
                        <h2>Navigation</h2>
                    </div>
                </div>

                <div className="navbar-item-link">
                    <div className="item-link">
                        <h2>Navigation</h2>
                    </div>
                </div>

                <div className="navbar-item-link">
                    <div className="item-link">
                        <h2>Navigation</h2>
                    </div>
                </div>
            </section>

            <section className="navbar-items-right">
                <div className="navbar-signup">
                    <div className="item-signup">
                        <h2>Sign up</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}