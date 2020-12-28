import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Imgs/Carrier_Logo.png';
import '../Styling/Navbar.css';

export default function NavBar(props) {
    const [navbar, setNavbar] = useState(false);
    
    const backgroundColor = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 90) {
            setNavbar(true);
        } else setNavbar(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', backgroundColor);
    }, [])

    const about = () => {
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        })
    }

    const home = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={navbar ? "navbar-div-scroll" : "navbar-div"} >
            {/* All items on the left side of the navbar */}
            <section className="navbar-items-left">
                {/* The logo located on the navbar*/}
                <div className="navbar-logo">
                    <img src={Logo} width={45} onClick={() => home()}/>
                </div>

                <div className="navbar-item-link">
                    <div className="item-link">
                        <h2 onClick={() => about()}>About</h2>
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