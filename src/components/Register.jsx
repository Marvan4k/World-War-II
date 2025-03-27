import React from "react";
import {Reg} from "./Reg";

const Register = ({ reg }) => {
    return (
        <div style={{ display: reg ? 'none' : 'block' }}>
            <h1>
                Register Page
            </h1>
                <Reg />
            <p>
                Registration
            </p>
        </div>
    )
}

export default Register;