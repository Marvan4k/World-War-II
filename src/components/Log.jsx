import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { setUser } from "../store/slices/userSlice";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Log = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );

                push('/');
            })
            .catch(() => {
                alert("Неверный Email");
            });
    }

    return (
        <div>
            <Form
                title={"Войти"}
                handleClick={handleLogin}
            />
        </div>
    )
}

export {Log};