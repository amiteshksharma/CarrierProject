import React from 'react';
import NavBar from '../Components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Card from '../Components/Card';

//Import the images 
import Carrier from '../Imgs/Carrier_vector_background.jpg';
import Hassle from '../Imgs/Hassle.png';
import Package from '../Imgs/Package.png';
import Satisfied from '../Imgs/Satisfied.png';

//Import the constants for the homepage
import { hassle, reimagine, customer } from '../Constants/Homepage';
import '../Styling//Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = "Amitesh2001"

        fetch(`/user/update/label`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: data
        }).then(res => res.json()).then(data => {
            console.log(data);
        });
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

                <div className="homepage-goals">
                    <div className="homepage-goals-title">
                        <h2>Why Carrier?</h2>
                    </div>

                    <Container fluid style={{backgroundColor: 'var(--one)'}}>
                        <Row>
                            <Col>
                                <div className="company-goals">
                                    <Card title={"Minimal Hassle"} image={Hassle} description={hassle}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="company-goals">
                                    <Card title={"Customer Satisfaction"} image={Satisfied} description={customer}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="company-goals">
                                    <Card title={"Returns Reimagined"} image={Package} description={reimagine} />
                                </div>
                            </Col>
                        </Row>
                    </Container>   
                </div>
            </div>
        )
    }
}

export default Home;
