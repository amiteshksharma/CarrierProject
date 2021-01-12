import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../Imgs/Carrier_Logo.png';
import '../Styling/Navbar.css';

export default function NavBar(props) {
    const [navbar, setNavbar] = useState(false);
    const history = useHistory();

    const isLogin = localStorage.getItem("User");
    
    const backgroundColor = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 90) {
            setNavbar(true);
        } else setNavbar(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', backgroundColor);
        if(props.notHomePage) {
            setNavbar(true);
        }
    }, [])

    const about = () => {
        if(props.isNotHome) {
            history.push("/");
        }
        
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        })
    }

    const home = () => {
        if(props.isNotHome) {
            history.push("/");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const redirect = (redirect) => {
        history.push(`/${redirect}`)
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
                        <h2>Contact</h2>
                    </div>
                </div>

                <div className="navbar-item-link">
                    <div className="item-link">
                        <h2 onClick={() => redirect("returns")}>Returns</h2>
                    </div>
                </div>
            </section>

            {!isLogin ? 
                <section className="navbar-items-right">
                    <div className="navbar-signup">
                        <div className="item-signup">
                            <h2 onClick={() => redirect("signup")}>Signup</h2>
                        </div>
                    </div>
                    <div className="navbar-login">
                        <div className="item-login">
                            <h2 onClick={() => redirect("login")}>Login</h2>
                        </div>
                    </div>
                </section> : 
                <section className="navbar-items-right-profile">
                    <div className="navbar-profile ">
                        <div className="item-profile">
                            <h2 onClick={() => redirect("profile")}>My Account</h2>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}