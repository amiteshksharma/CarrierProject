import React from 'react';
import '../Styling/Returns.css';
import Return from '../Imgs/Returns.png';
import NavBar from '../Components/NavBar';

class Returns extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="returns-div">  
                <NavBar isNotHome={true} />
                <section className="return-begin">
                    <div className="return-create-account">
                        <h2>New user? Click here!</h2>
                        <button>Register Now!</button>
                    </div>
                    <div className="return-start-process">
                        <h2>Ready to return? Click here!</h2>
                        <button>Begin here!</button>
                    </div>
                </section>

                <section className="return-image">
                    <img src={Return} width={1100} height={600}></img>
                </section>
            </div>
        )
    }
}

export default Returns