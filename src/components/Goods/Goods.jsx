import React from "react";
import good from "../../assets/images/good.png"
import left from "../../assets/icons/leftpagination.svg"
import right from "../../assets/icons/rightPagination.svg"

export default function Goods(filterValue) {

    console.log(filterValue.filterValue);

    return (
        <>
            <div className="wrapper-goods">
                <h2>Каталог</h2>
                <div className="container-goods">
                    <div className="good accountant">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>5 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>

                    <div className="good accountant">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>5 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>

                    <div className="good accountant">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>5 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>

                    <div className="good accountant">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>5 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>

                    <div className="good accountant">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>5 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>
                    <div className="good software">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>6 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>
                    <div className="good lawyer">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price">
                            <h5>4 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>
                    <div className="good support">
                        <img src={good} alt="Изображение товара"/>
                        <div className="container-info">
                            <h5>1С Бухгалтерия 8. Базовая</h5>
                            <p>Предназначена для автоматизации бухгалтерского и налогового учета, включая подготовку
                                обязательной (регламентированной) отчетности в организации. Эта версия подходит только
                                для однопользовательской работы.</p>
                        </div>
                        <div className="container-price ">
                            <h5>2 000 руб.</h5>
                            <button className={'main-btn'}>Купить</button>
                        </div>
                    </div>

                </div>
                <div className="pagination">
                    <img src={left} alt="Стрелка влево" className="arrow"/>
                    <p className={'active'}>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <img src={right} alt="Стрелка вправо" className="arrow"/>
                </div>
            </div>
        </>
    )
}