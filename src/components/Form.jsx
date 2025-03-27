import { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className="flex flex-col w-96">
            <input className="bg-white rounded-lg block mb-8 mt-16 h-10 p-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="bg-white rounded-lg block mb-6 border-none h-10 p-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button
                className="bg-fuchsia-700 rounded-lg block cursor-pointer text-white h-12 w-full"
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>

        </div>
    )
}

export {Form};
