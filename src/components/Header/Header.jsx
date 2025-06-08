import React from 'react';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";



export default function Header() {
    return (
        <header>
            <NavLink to='/'>
                <img src={logo} alt="Логотип компании"/>
            </NavLink>
            <nav>
                <ul>
                    <li> <NavLink to='/news'>Новости</NavLink> </li>
                    <li> <NavLink to='/catalog'>Каталог</NavLink> </li>
                    <li> <NavLink to='/consultation'>Консультация</NavLink></li>
                </ul>
            </nav>
            <div className="right-side-nav">
                <a href="tel:+3902262804">(3902) 26-28-04</a>
                <a href="mailto:kredoabakan@yandex.ru">kredoabakan@yandex.ru</a>
            </div>
        </header>
        )
}