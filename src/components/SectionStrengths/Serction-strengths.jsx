import React, { useEffect } from "react";
import strength1 from "../../assets/icons/strength1.svg";
import strength2 from "../../assets/icons/strength2.svg";
import strength3 from "../../assets/icons/strength3.svg";
import strength4 from "../../assets/icons/strength4.svg";

export default function SectionStrengths() {
    useEffect(() => {
        const onEntry = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('element-show');
                }
            });
        };

        const options = {
            threshold: [0.5]
        };

        const observer = new IntersectionObserver(onEntry, options);
        const elements = document.querySelectorAll('.strength');

        elements.forEach(el => {
            el.classList.add('element-animation');
            observer.observe(el);
        });

        return () => {
            elements.forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section>
            <h2>Преимущества</h2>
            <div className="container-strengths ">
                <div className="strength element-animation down-show">
                    <img src={strength1} alt="Иконка"/>
                    <h5>Надежная компания</h5>
                    <p>Обслужили более 1000 клиентов</p>
                </div>
                <div className="strength element-animation up-show">
                    <img src={strength2} alt="Иконка"/>
                    <h5>Удобство для клиента</h5>
                    <p>Можно приехать к нам в офис или вызвать специалиста к себе</p>
                </div>
                <div className="strength element-animation down-show">
                    <img src={strength3} alt="Иконка"/>
                    <h5>Качество услуг</h5>
                    <p>Cпециалисты обладают высокой квалификацией и большим опытом</p>
                </div>
                <div className="strength element-animation up-show">
                    <img src={strength4} alt="Иконка"/>
                    <h5>Индивидуальный подход</h5>
                    <p>Нашим клиентам гарантирован индивидуальный подход</p>
                </div>
            </div>
        </section>
    )
}