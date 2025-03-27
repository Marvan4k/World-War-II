import React from "react";
import {Log} from "./Log";

const Login = ({ log }) => {
    return (
        <div style={{ display: log ? 'flex' : 'none' }} className="w-3xl h-96 rounded-4xl flex justify-center flex-col items-center bg-emerald-500">
            <h1 className="text-4xl leading-tight font-bold text-white">
                Войти
            </h1>
                <Log />
        </div>
    )
}

export default Login;