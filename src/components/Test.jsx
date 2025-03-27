import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

const Test = () => {

    const [ acc, setAcc ] = useState(true);

    const handleClick = () => {
        if (acc) {
            setAcc(false);
        }
        else {
            setAcc(true);
        }
    }


    return (
        <div style={{ padding: "2rem" }}>
            <button onClick={handleClick} style={{ cursor: "pointer", background: "black", color: "white", padding: "10px", borderRadius: "5px" }}>reg/login</button>
            <Login log={acc} />
            <Register reg={acc} />
        </div>
    )
}

export default Test;

