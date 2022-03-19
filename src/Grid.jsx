import React, { useState } from "react";
import './Grid.css';
import SingleBox from "./SingleBox";

export default function Grid() {

    const colorsArray = ["white", "white", "white", "white"];
    const [backColor, setBackColor] = useState(colorsArray);
    console.log("lalala " + backColor);
    // const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(0);

    function changeStatus(index) {
        let newArr = [...backColor];
        if (backColor[index] === "white") {
            newArr[index] = "black";
            setBackColor(newArr);
            setCount(count + 1);
        } else {
            newArr[index] = "white";
            setBackColor(newArr);
            setCount(count - 1);
        }

        // setSelected(true);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <div className="grid-container">
                <SingleBox changeStatus={() => changeStatus(0)} backColor={backColor[0]} />
                <SingleBox changeStatus={() => changeStatus(1)} backColor={backColor[1]} />
                <SingleBox changeStatus={() => changeStatus(2)} backColor={backColor[2]} />
                <SingleBox changeStatus={() => changeStatus(3)} backColor={backColor[3]} />
            </div>
        </div>
    );
}