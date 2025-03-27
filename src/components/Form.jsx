import { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button
                // onClick={handleClick}
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>
        </div>
    )
}

export {Form};
