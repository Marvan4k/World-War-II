import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Close from "../img/Krestik.svg";
import Login from "./Login";
import Register from "./Register";
import {useAuth} from "../hooks/use-auth";

const ContentSection = () => {
    const navigate = useNavigate();

    const { isAuth } = useAuth();

    useEffect(() => {
        if (isAuth) {
            setModal(true);
        }
    }, [isAuth])

    const [ isLogin, setLogin ] = useState(true);
    const [ isModal, setModal ] = useState(true);

    const handleClicked = () => {
        console.log("isModal");
        setLogin((prev) => !prev);
    }
    const [activeTab, setActiveTab] = useState('constructor');

    const content = {
        constructor: {
            title: 'Конструктор блоков',
            elements: [
                {
                    type: 'text',
                    content: 'Создайте свои собственные блоки с текстами и изображениями. Легко и просто! Вы можете добавлять и делиться своими находками с друзьями'
                },
            ]
        },
        maps: {
            title: 'Интерактивные карты',
            text: 'Исследуйте ключевые сражения и перемещения войск с помощью подробных интерактивных карт военных действий.',
        },
        facts: {
            title: 'Исторические факты',
            text: 'Погрузитесь в удивительные и малоизвестные факты о Великой Отечественной войне, подкрепленные архивными документами.',
        },
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10000 "
                 style={{display: isModal ? "none" : "block"}}>
                <div className="relative top-0 left-0 w-full h-full flex justify-center items-center bg-emerald-500 sm:bg-[#262626]"

                >
                    <img className="cursor-pointer absolute top-2 right-2" src={Close} alt="Close" onClick={() => setModal(true)} />
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
                            {isLogin ? "Зарегистрироваться" : "Войти"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full mx-auto p-6 min-h-[400px] max-w-[1280px]">
                <div className=" flex-col flex-wrap gap-4 mb-6 min-w-[30%] hidden sm:flex">
                    <button onClick={() => setActiveTab('constructor')} className={`text-left text-2xl px-4 py-2 rounded-lg transition-colors ${ activeTab === 'constructor' ? 'text-[#25A18E] hover:text-[#1d8273]': 'text-white hover:text-[#1d8273]'}`} >
                        Конструктор блоков
                    </button>
                    <button onClick={() => setActiveTab('maps')} className={`text-left text-2xl px-4 py-2 rounded-lg transition-colors ${activeTab === 'maps' ? 'text-[#25A18E] hover:text-[#1d8273]': 'text-white hover:text-[#1d8273]'}`}>
                        Интерактивные карты
                    </button>
                    <button onClick={() => setActiveTab('facts')} className={`text-left text-2xl px-4 py-2 rounded-lg transition-colors ${activeTab === 'facts' ? 'text-[#25A18E] hover:text-[#1d8273]': 'text-white hover:text-[#1d8273]'}`}>
                        Исторические факты
                    </button>
                </div>

                {activeTab === 'constructor' ? (
                    <div className="animate-fadeIn space-y-6">
                        <div className="p-6 rounded-lg shadow-sm space-y-6">
                            {isAuth ?
                                (
                                    <button className="w-full py-4 px-8 bg-[#25A18E] text-white text-lg rounded-lg hover:bg-[#1d8273] transition-colors shadow-md"
                                            onClick={() => navigate('/constr')}
                                    >
                                        Создать блок
                                    </button>
                                )
                                :
                                (
                                    <button className="w-full py-4 px-8 bg-[#25A18E] text-white text-lg rounded-lg hover:bg-[#1d8273] transition-colors shadow-md"
                                            onClick={() => setModal(false)}
                                    >
                                        Создать блок
                                    </button>
                                )
                            }
                            <p className="text-white text-lg">
                                {content.constructor.elements[0].content}
                            </p>
                            <>
                                <p className="text-white mb-4">

                                </p>
                                <button className="px-6 py-2 bg-[#25A18E] text-white rounded-lg hover:bg-[#1d8273] transition-colors">
                                    Подробнее
                                </button>
                            </>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 animate-fadeIn w-full">
                        <h2 className="text-2xl font-bold text-white">
                            {content[activeTab].title}
                        </h2>
                        <p className="text-white leading-relaxed">
                            {content[activeTab].text}
                        </p>
                        <button className="mt-4 px-6 py-2 bg-[#25A18E] text-white rounded-lg hover:bg-[#1d8273] transition-colors">
                            Подробнее
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContentSection;