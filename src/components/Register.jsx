import React from "react";
import {Reg} from "./Reg";

const Register = ({ reg }) => {
    return (
        <div style={{ display: reg ? 'none' : 'flex' }} className="w-3xl h-96 rounded-4xl flex justify-center flex-col items-center bg-none sm:bg-emerald-500">
            <h1 className="text-4xl leading-tight font-bold text-white">
                Зарегистрироваться
            </h1>
                <Reg />
        </div>
    )
}

export default Register;