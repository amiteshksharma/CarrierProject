import React, { useState } from 'react';
import Carrier from '../Imgs/Carrier.jpg';
import '../Styling//Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="homepage-container">
                    {/* The panel on the homepage, contains background image, signup button */}
                    <section className="panel" >
                        <div className="panel-image">
                            <div className="panel-description">
                                {/* The text display on the home page */}
                                <div className="panel-description-background">
                                    <h2>Returning Packages Simplified.</h2>
                                    <button>Sign up</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="homepage-container">
                    <section className="panel" >
                        <div className="panel-image">
                            
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;
