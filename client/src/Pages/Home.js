import React, { useState } from 'react';
import Carrier from '../Imgs/Carrier_vector_background.jpg';
import NavBar from '../Components/NavBar';
import '../Styling//Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* The navbar for the homepage and all pages */}
                <NavBar />
                <div className="homepage-container">
                    {/* The panel on the homepage, contains background image, signup button */}
                    <section className="panel" >
                        <div className="panel-image">
                            <img className="panel-vector-img" src={Carrier} width={"100%"} height={"930"} />    
                        </div>
                    </section>

                    {/* Floating cloud for design purposes */}
                    <section className="cloud-section">
                        <div className="cloud"></div>
                    </section>

                    {/* The homepage banner with signup and login button */}
                    <section className="banner">
                        <div className="cloud">
                            <h2>Returning Simplified</h2>
                        </div>
                    </section>

                    <section className="description">
                        <div className="summary">
                            <p>Return packages without the hassle. In 4 simple steps, return packages without grabbing your keys or driving to the nearest post office.</p>
                        </div>
                    </section>
                </div>

                <div>
                    <h1>HELLO WORLD</h1>
                </div>
            </div>
        )
    }
}

export default Home;
