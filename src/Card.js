import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
                <div className="card-image">
                    <img src={props.product.image} alt="logo"/>
                </div>
                <div className="card-info">
                    <div className="card-name">{props.product.name}</div>
                    <div className="card-price">{props.product.price}</div>
                    <div className="123">Rating: {props.product.rating}</div>
                </div>
            <Button id={props.product.id} bought ={props.product.bought} setBought={props.setBought}/>
        </div>
    );
}

export default Card;