import Login from "./Login";
import Register from "./Register";
import React, {useEffect, useState} from "react";
import Close from "../img/Krestik.svg";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

export default function Header() {
  const dispatch = useDispatch();



  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      setModal(true);
    }
  }, [isAuth]);

  const [ isLogin, setLogin ] = useState(true);
  const [ isModal, setModal ] = useState(true);

  const handleClicked = () => {
    console.log("isModal");
    setLogin((prev) => !prev);
  }

  return (
      <>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100 "
          style={{display: isModal ? "none" : "block"}}>
          <div className="relative top-0 left-0 w-full h-full flex justify-center items-center bg-[#262626]"

          >
            <img className="cursor-pointer absolute top-[35%] right-[36%]" src={Close} alt="Close" onClick={() => setModal(true)} />
            <Login
                log={isLogin}
            />
            <Register
                reg={isLogin}
            />
            <div className="fixed bottom-0 left-0 w-full h-[38.5%] flex justify-center items-start z-100">
              <button
                  className=" block cursor-pointer text-white mt-4"
                  onClick={handleClicked}
              >
                {isLogin ? "Sing Up" : "Sing In"}
              </button>
            </div>
          </div>
        </div>
        <header className="bg-[#00161D] text-white fixed w-full">
          <nav className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
            <a href="#" className="hover:text-[#25A18E] py-2 transition-colors font-medium text-2xl">История</a>
            <div className="flex space-x-8 font-medium">
              <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Лента времени</a>
              <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Исторические факты</a>
              <a href="#" className="hover:text-[#25A18E] py-2 transition-colors text-2xl">Интерактивные карты</a>
            </div>
            {isAuth ?
                (
                    <button className="bg-[#25A18E] text-white px-6 py-2 rounded-sm hover:bg-[#1d8273] font-medium transition-colors cursor-pointer text-2xl"
                      onClick={() => dispatch(removeUser())}>

                      Выйти
                    </button>
                )
                :
                (
                    <button className="bg-[#25A18E] text-white px-6 py-2 rounded-sm hover:bg-[#1d8273] font-medium transition-colors cursor-pointer text-2xl"
                            onClick={() => setModal(false)}>
                      Авторизоваться
                    </button>
                )
            }
          </nav>
        </header>
      </>
  );
}