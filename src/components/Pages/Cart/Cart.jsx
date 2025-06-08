import React, { useState} from 'react';
import img from '../../../assets/images/good.png';
import ModuleWindowCart from "../../ModuleWindowCart/ModuleWindowCart";
import {NavLink} from "react-router-dom";


export default function Cart() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleCloseModal() {
        setIsModalOpen(false)
    }


    return (
        <>
            <ModuleWindowCart isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="wrapper">
                <div className="wrapper-cart">
                    <div className="title-cart">
                        <h2>Корзина</h2>
                        <button className="secondary-btn">
                            Очистить корзину
                        </button>
                    </div>
                    <div className="container-goods">
                        <p>Коливество товара</p>
                        <div className="container-good">
                            <div className="left-side">
                                <img src={img} alt="Изображение товара"/>
                                <div className="title-good">
                                    <h6>1С Бухгалтерия 8. Базовая</h6>
                                    <p>6000 руб.</p>
                                </div>
                            </div>
                            <div className="right-side">
                                <p className={'changerCount'}>-</p>
                                <p>1</p>
                                <p className={"changerCount"}>+</p>
                            </div>
                        </div>
                        <div className="container-good">
                            <div className="left-side">
                                <img src={img} alt="Изображение товара"/>
                                <div className="title-good">
                                    <h6>1С Бухгалтерия 8. Базовая</h6>
                                    <p>6000 руб.</p>
                                </div>
                            </div>
                            <div className="right-side">
                                <p className={'changerCount'}>-</p>
                                <p>1</p>
                                <p className={"changerCount"}>+</p>
                            </div>
                        </div>
                        <div className="container-good">
                            <div className="left-side">
                                <img src={img} alt="Изображение товара"/>
                                <div className="title-good">
                                    <h6>1С Бухгалтерия 8. Базовая</h6>
                                    <p>6000 руб.</p>
                                </div>
                            </div>
                            <div className="right-side">
                                <p className={'changerCount'}>-</p>
                                <p>1</p>
                                <p className={"changerCount"}>+</p>
                            </div>
                        </div>
                        <div className="container-good">
                            <div className="left-side">
                                <img src={img} alt="Изображение товара"/>
                                <div className="title-good">
                                    <h6>1С Бухгалтерия 8. Базовая</h6>
                                    <p>6000 руб.</p>
                                </div>
                            </div>
                            <div className="right-side">
                                <p className={'changerCount'}>-</p>
                                <p>1</p>
                                <p className={"changerCount"}>+</p>
                            </div>
                        </div>
                        <div className="container-good">
                            <div className="left-side">
                                <img src={img} alt="Изображение товара"/>
                                <div className="title-good">
                                    <h6>1С Бухгалтерия 8. Базовая</h6>
                                    <p>6000 руб.</p>
                                </div>
                            </div>
                            <div className="right-side">
                                <p className={'changerCount'}>-</p>
                                <p>1</p>
                                <p className={"changerCount"}>+</p>
                            </div>
                        </div>
                        <h3>Всего: 18000 руб.</h3>
                        <div className="container-buttons">
                            <NavLink to={'/catalog'}>
                                <button className="secondary-btn">
                                    Вернуться к покупкам
                                </button>
                            </NavLink>
                            <button className="main-btn" onClick={() => setIsModalOpen(true)}>
                                Отправить заявку
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )


}