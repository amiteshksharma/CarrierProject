import React from 'react';
import { Form, Col } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import '../Styling/Signup.css';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        let ageArray = [];
        for(let i = 18; i < 81; i++) {
            ageArray.push(i);
        }

        this.state = {
            registerUser: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                gender: '',
                age: ''
            },
            ageArr: ageArray,
            firstNameValid: false,
            lastNameValid: false,
            passwordValid: false,
            genderValid: false,
            ageValid: false,
            emailValid: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.validation = this.validation.bind(this);
    }

    componentDidMount() {}

    handleChange(e) {
        const getUser = this.state.registerUser;
        getUser[e.target.name] = e.target.value;
        const validation = e.target.name + "Valid";
        this.setState({
            registerUser: getUser,
            [validation]: false
        })
    }

    validation(user, state, num) {
        if(user.length <= num) {
            this.setState({ [state]: true }, () => {
                console.log(this.state);
            });
        }   
    }

    register(e) {
        e.preventDefault();
        const getUser = this.state.registerUser;
        
        this.validation(getUser.firstName, "firstNameValid", 0); 
        this.validation(getUser.lastName, "lastNameValid", 0);
        this.validation(getUser.email, "emailValid", 0);
        this.validation(getUser.password, "passwordValid", 5); 
        this.validation(getUser.gender, "genderValid", 0);
        this.validation(getUser.age, "ageValid", 0);

        const authObject = {
            email: getUser.email,
            password: getUser.password,
            returnSecureToken: true
        }

        const userObject = {
            name: getUser.firstName + " " + getUser.lastName,
            gender: getUser.gender,
            email: getUser.email,
            age: getUser.age,
            label: 'User',
            address: '',
            city: '',
            state: '',
            zipCode: '',
        }

        fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(authObject)
        }).then(res => res.json())
        .then(data => {
            // this.props.history.push("/");
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

        fetch('/user/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userObject)
        }).then(res => res.json())
        .then(data => {
            this.props.history.push("/");
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="signup-div">   
                <NavBar isNotHome={true} notHomePage={true} />
                <section className="signup-section">
                    <div className="signup-box">
                        <h2>Register with Carrier</h2>
                        <div className="signup-forms">
                            <Form noValidate>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="text" placeholder="First Name" 
                                            onChange={(e) => this.handleChange(e)} name="firstName" isInvalid={this.state.firstNameValid}
                                        />
                                        <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                            First Name must be filled out.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="text" placeholder="Last Name" 
                                            onChange={(e) => this.handleChange(e)} name="lastName" isInvalid={this.state.lastNameValid}
                                        />
                                        <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                            Last Name must be filled out.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="email" placeholder="Enter email" 
                                        onChange={(e) => this.handleChange(e)} name="email" isInvalid={this.state.emailValid}
                                    />
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                            Email must be filled out.
                                        </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formGroupPassword">
                                    <Form.Control style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} type="password" placeholder="Password" 
                                        onChange={(e) => this.handleChange(e)} name="password" isInvalid={this.state.passwordValid}
                                    />
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                            Password must be 6 characters or longer
                                        </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control as="select" style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black'}} 
                                        onChange={(e) => this.handleChange(e)} name="gender" isInvalid={this.state.genderValid}>
                                        <option disabled selected>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                            Please pick a gender.
                                        </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control as="select" style={{height: 'calc(4.5vh)', fontSize: 'calc(1.1vw)', color: 'black' }} 
                                        onChange={(e) => this.handleChange(e)} name="age" isInvalid={this.state.ageValid}>
                                        <option disabled selected>Age</option>
                                        {this.state.ageArr.map(num => (
                                            <option>{num}</option>
                                        ))}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid" style={{color: 'white'}}>
                                        Please pick an age.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <div className="register-button">
                                    <button type="submit" onClick={(e) => this.register(e)}>Register</button>
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