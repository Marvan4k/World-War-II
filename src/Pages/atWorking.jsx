import React from "react";
import { useNavigate } from "react-router-dom";
import Hummer from "img/Hummer.svg"

const AtWorking = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#00161D] w-full h-screen flex flex-col items-center justify-center">
            <img className="w-28 h-28" src={Hummer} alt="Hummer"/>
            <p className="text-white mt-8 text-4xl ">
                Данный раздел пока в разработке...
            </p>
            <button className="text-[#25A18E] py-2 transition-colors text-xl mt-12 cursor-pointer"
                onClick={() => {navigate('/')}}>
                Назад
            </button>
        </div>
    )
}
export default AtWorking;