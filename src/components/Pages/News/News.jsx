import React from "react";
import {NavLink} from "react-router-dom";
import arrow from '../../../assets/icons/arrowNews.svg'


export default function News() {
    return (
        <>
            <div className="wrapper">
                <h2>Новости</h2>
                <div className="container-news">
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="block-news">
                        <div className="block-blur">
                            <div className="title-news">
                                <h4>Правительство Калининградской области и фирма "1С" расширяют сотрудничество
                                    в области информационных технологий</h4>
                                <p>Правительство Калининградской области и фирма "1С" заключили соглашение о сотрудничестве.
                                    Документ подписали губернатор Алексей Беспрозванных и директор фирмы...</p>
                            </div>
                            <NavLink to="/news/1" className={'link-news'}>
                                <h5>Читать далее</h5>
                                <img src={arrow} alt="Иконка стрелки"/>
                            </NavLink>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}