import React from 'react';

function Button(props) {
        function addCard() {
            return (props.setBought(props.id))
        }

    return (
        <div className="card-button">
            <button className="btn" onClick={addCard} disabled={props.bought}>
                {props.bought ? "Удалить из корзины" : "Добавить в корзину"}
            </button>
        </div>
    );
}
export default Button;
// менять кнопку на красную при клике, т.е красная кнопка с помощью bought