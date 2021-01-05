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
        const data = {
            idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUwOGI0NzM0YjYxNmE0MWFhZmE5MmNlZTVjYzg3Yjc2MmRmNjRmYTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fycmllci1jZmEzOSIsImF1ZCI6ImNhcnJpZXItY2ZhMzkiLCJhdXRoX3RpbWUiOjE2MDk4MjQxMjgsInVzZXJfaWQiOiJpU1V0a1NiVzFuVWZoT1RRbHZjMDVMZ0xLcTIzIiwic3ViIjoiaVNVdGtTYlcxblVmaE9UUWx2YzA1TGdMS3EyMyIsImlhdCI6MTYwOTgyNDEyOCwiZXhwIjoxNjA5ODI3NzI4LCJlbWFpbCI6InNwYWlucnVsenNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNwYWlucnVsenNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.F20QotIMPr5JOOhpOdvMXED_I7sEmCtuhxJI5ALU_5PJitfIThS20IkfXgjA0evNFHiexuNGRJZHxgW0I0BePUN7jXujHX-QMzxTK02p7d0exTzOwz3qFefCzy_RUUXcYvls6-9-PsEVfFLgway_KIQlv66ayigZVAeHj4b3ukZXJiVE5bobZk5tKzmc2_exEB_xqdew0bwNkvJDZ4uNpL0V9taYUfgSEPGEPHzrw-2Su2HTWzWePzXq9p4ZyKiePcH7KWOhaly_sngOn6OwKyLeZgTJ7sHPtXt9lHuAhqFA_uN8FzYzWmfHrqjK13F3OHmdUf9AzIkdzPMhd1mG8w"
        }

        fetch(`/user/account/delete`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
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
