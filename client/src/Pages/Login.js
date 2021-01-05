import React from 'react';
import '../Styling/Login.css';
import NavBar from '../Components/NavBar';
import { Form } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-div">
                <NavBar isNotHome={true} notHomePage={true} />
                <section className="login-box-section">
                    <div className="login-box">
                        <h2>Login to Carrier</h2>
                        <div className="login-forms">
                            <Form>
                                <Form.Group controlId="formGroupEmail">
                                    {/* <Form.Label style={{fontSize: 'calc(1.2vw)'}}>Email address</Form.Label> */}
                                    <Form.Control style={{height: 'calc(5vh)', fontSize: 'calc(1.2vw)'}} type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    {/* <Form.Label style={{fontSize: 'calc(1.2vw)'}}>Password</Form.Label> */}
                                    <Form.Control style={{height: 'calc(5vh)', fontSize: 'calc(1.2vw)'}} type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <div className="login-button">
                                    <button>Login</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </section>

                <section className="forgot-password">
                    <h2>Forgot password?</h2>
                </section>

                <hr />

                <section className="redirect-section-login">
                    <div className="redirect-div-login-page">
                        <button>Register here!</button>
                    </div>
                </section>


            </div> 
        )
    }
}