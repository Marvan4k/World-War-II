import { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(false);

    const submitPass = (e) => {
        if (e.target.value.length < 6) {
            e.target.classList.add("border-red-500");
            setPassword(e.target.value);
            setConfirmPassword(false);
        }
        else {
            e.target.classList.remove("border-red-500");
            setPassword(e.target.value);
            setConfirmPassword(true);
        }
    }
    const submitClick = () => {
        if (confirmPassword) {
            handleClick(email, password);
        }
        else if (email.includes("@")) {
            alert("Не верный Email");
        }
        else {
            alert("Пароль слишком короткий");
        }
    }

    return (
        <div className="flex flex-col w-96">
            <input className="bg-white rounded-lg block mb-8 mt-16 h-10 p-4" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="bg-white rounded-lg block border-none h-10 p-4" type="password" placeholder="Password" value={password} onChange={submitPass} />
            <label className={`text-red-700 ${confirmPassword ? "hidden" : "block"}`} htmlFor="password">Минимальная длина - 6 символов</label>

            <button
                className="bg-fuchsia-700 rounded-lg mt-6 block cursor-pointer text-white h-12 w-full"
                onClick={submitClick}
            >
                {title}
            </button>

        </div>
    )
}

export {Form};
