import React from "react";

const getRandom = (list) => {
    return Math.floor(Math.random() * list.length);
}

export default getRandom;