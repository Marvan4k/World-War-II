import Login from "./Login";
import Register from "./Register";
import React, {useState} from "react";

export default function Header() {

  const [ isLogin, setLogin ] = useState(true);
  const [ isModal, setModal ] = useState(false);

  const handliClicked = () => {
    setLogin((prev) => !prev);
  }

  return (
      <>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100 "
          style={{display: isModal ? "none" : "block"}}>
        >
          <div className="relative top-0 left-0 w-full h-full flex justify-center items-center bg-[#262626]"
               onClick={() => setModal(false)}
          >
            <Login
                log={isLogin}
            />
            <Register
                reg={isLogin}
            />
            <div className="fixed bottom-0 left-0 w-full h-[38.5%] flex justify-center items-start z-100">
              <button
                  className=" block cursor-pointer text-white mt-4"
                  onClick={handliClicked}
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
            <button className="bg-[#25A18E] text-white px-6 py-2 rounded-sm hover:bg-[#1d8273] font-medium transition-colors cursor-pointer text-2xl">
              Авторизоваться
            </button>
          </nav>
        </header>
      </>
  );
}