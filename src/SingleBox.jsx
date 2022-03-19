import React from 'react';
import './SingleBox.css';

export default function SingleBox(props) {
    let classColor = "box";
    
    classColor += " " + props.backColor;

    return (
        <div>
            <div className={classColor} onClick={props.changeStatus}></div>
        </div>
    );
}