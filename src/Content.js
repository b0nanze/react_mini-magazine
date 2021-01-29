import React from 'react';
import Card from "./Card";

function Content(props) {

    const newDatabase = props.database.map((item)=> {
        return(
            <Card setBought={props.setBought} product={item}/>
        )
    })
    return (
        <div className="content">{newDatabase}</div>
    );
}
export default Content;

