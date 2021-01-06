import React from 'react';
import { Form, Col } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import '../Styling/Signup.css';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="signup-div">   
                <NavBar isNotHome={true} notHomePage={true} />
                <section className="signup-section">
                    <div className="signup-box">
                        <h2>Register with Carrier</h2>
                        <div className="signup-forms">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="email" placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="email" placeholder="Last Name" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Control as="select" style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} placeholder="gender">
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                                
                                <div className="register-button">
                                    <button>Register</button>
                                </div>
                            </Form>

                            <div className="redirect-to-login">
                                <h2>Already a user? Log in here.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}