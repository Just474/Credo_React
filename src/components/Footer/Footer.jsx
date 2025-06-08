import React from "react";


export default function Footer() {
    return (
        <footer>
            <div className="footer--info-block">
                <h5>Информация</h5>
                <p>Статьи</p>
            </div>
            <div className="footer--info-block">
                <h5>О компании</h5>
                <p>Где мы находимся</p>
                <p>Интересующие вопросы</p>
            </div>
            <div className="footer--info-block">
                <h5>Контакты</h5>
                <a href="tel:+3902262804">(3902) 26-28-04</a>
                <a href="mailto:kredoabakan@yandex.ru">kredoabakan@yandex.ru</a>
            </div>
            <div className="footer--info-block">
                <h2>ООО “Кредо”</h2>
                <p>&copy; 2007—{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}