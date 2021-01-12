import React from 'react';
import '../Styling/Login.css';
import NavBar from '../Components/NavBar';
import { Form } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            email: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        if(this.state.email.length < 6 || this.state.password.length < 6) {
            this.setState({ validated: true});
            return;
        } 

        const object = {
            email: this.state.email,
            password : this.state.password,
            returnSecureToken: true
        }

        fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(res => res.json())
        .then(data => {
            this.props.history.push("/");
            localStorage.setItem('User', data.email);
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="login-div">
                <NavBar isNotHome={true} notHomePage={true} />
                <section className="login-box-section">
                    <div className="login-box">
                        <h2>Login to Carrier</h2>
                        <div className="login-forms">
                            <Form noValidate validated={this.state.validated} onSubmit={(e) => this.login(e)}>
                                <Form.Group controlId="formGroupEmail">
                                    {/* <Form.Label style={{fontSize: 'calc(1.2vw)'}}>Email address</Form.Label> */}
                                    <Form.Control style={{height: 'calc(4.55vh)', fontSize: 'calc(1.1vw)'}} type="email" placeholder="Enter email" required 
                                        name="email" onChange={(e) => this.handleChange(e)}
                                    />
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                        Email not found
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    {/* <Form.Label style={{fontSize: 'calc(1.2vw)'}}>Password</Form.Label> */}
                                    <Form.Control style={{height: 'calc(4.55vh)', fontSize: 'calc(1.1vw)'}} type="password" placeholder="Password" required 
                                        name="password" onChange={(e) => this.handleChange(e)}
                                    />
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                        Incorrect Password
                                    </Form.Control.Feedback>
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