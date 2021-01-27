import React from 'react';
import wrap from './wrap.png'

function Checkout(props) {
    const check = props.database.filter(item=>item.bought).length
    const check2 = props.database.filter(item=>item.bought).length-1
    function numCheck () {
        if (check >= 0) {
            return check
        }
           else {
               return check2
        }
    }


    return (
        <div className="flex">
        <div className="checkout">
            <img src={wrap} alt="bask" />
            <span className="counter">{numCheck()}</span>
        </div>
            <div><a href="/" className="exit">выход</a></div>
        </div>
    );
}

export default Checkout;