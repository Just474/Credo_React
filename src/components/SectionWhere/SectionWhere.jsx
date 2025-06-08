import React from "react";



export default function SectionWhere() {
    return (
        <section>
            <h2>Где мы находимся</h2>
            <p>г. Абакан, ул. Вяткина, д. 5, офис 309</p>
            <div className="container-map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4d57324dbd01b908aaa587aa95e8860957ece26608717af7103c0f7568d19b5&amp;source=constructor"
                    frameBorder="0">
                </iframe>
            </div>
        </section>
    )
}