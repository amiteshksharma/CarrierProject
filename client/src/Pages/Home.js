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
                <NavBar />
                <div className="homepage-container">
                    {/* The panel on the homepage, contains background image, signup button */}
                    <section className="panel" >
                        <div className="panel-image">
                            <img className="panel-vector-img" src={Carrier} width={"100%"} height={"100%"} />    
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

{/* <div className="panel-description">
    <div className="panel-description-background">
        <h2>Returning Packages Simplified.</h2>
        <button>Sign up</button>
    </div>
</div> */}

export default Home;
