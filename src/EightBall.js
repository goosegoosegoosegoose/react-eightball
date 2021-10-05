import React, { useState } from "react";
import getRandom from "./getRandom";
import {answers} from "./answers";

const EightBall = () => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    function handleClick() {
        let idx = getRandom(answers);
        setMsg(answers[idx].msg);
        setColor(answers[idx].color);
    }

    return <div class="circle" onClick={handleClick} style={{backgroundColor: `${color}`}}>
        <p>{msg}</p>
    </div>
}
// why was backgroundColor not accepting color when I didn't put it in a string? answers[idx].color should be a string right?


export default EightBall;