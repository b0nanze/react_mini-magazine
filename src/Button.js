import React from 'react';

function Button(props) {
    return (
        <div className="card-button">
            <button className="btn" onClick={() => props.setBought(props.id)}>
                {props.bought ? 'Удалить из корзины' : 'Добавить в корзину'}
            </button>
        </div>
    );
}
export default Button;
// менять кнопку на красную при клике, т.е красная кнопка с помощью bought