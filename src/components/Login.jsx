import React from "react";
import {Log} from "./Log";

const Login = ({ log }) => {
    return (
        <div style={{ display: log ? 'block' : 'none' }}>
            <h1>
                Login Page
            </h1>
                <Log />
            <p>
                Login
            </p>
        </div>
    )
}

export default Login;