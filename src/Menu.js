import React from 'react';

function Menu(props) {
    return (
        <div className="menu">
            <ul>
                <li><a href="/">Одежда</a></li>
                <li><a href="/">Детям</a></li>
                <li><a href="/">Книги</a></li>
                <li><a href="/">Компьюторы</a></li>
                <li><a href="/">Контакты</a></li>
            </ul>
        </div>
    );
}

export default Menu;