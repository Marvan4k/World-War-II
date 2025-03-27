import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setUser } from "../store/slices/userSlice";

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Reg = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleRegister = (email, password) => {
        console.log("click")
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                push('/');
            })
            .catch(console.error);
    }

    return (
        <Form
            title="Register"
            handleClick={handleRegister}
        />
    )
}

export {Reg};