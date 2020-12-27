import React, { useState } from 'react';
import '../Styling/Card.css';
import Image from '../Imgs/Satisfied.jpg';

export default function Card(props) {
    return (
        <div className="card-div">
            <div className="card-image">
                <img src={props.image} width="40%" height="40%" />
            </div>

            <div className="card-title">
                <h2>{props.title}</h2>
            </div>

            <div className="card-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}