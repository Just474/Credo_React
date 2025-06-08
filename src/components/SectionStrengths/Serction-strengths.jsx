import React from "react";
import strength from "../../assets/icons/strength1.svg";

export default function SectionStrengths() {
    return (
        <section>
            <h2>Преимущества</h2>
            <div className="container-strengths">
                <div className="strength">
                    <img src={strength} alt="Иконка"/>
                    <h5>Надежная компания</h5>
                    <p>Обслужили более 1000 клиентов</p>
                </div>
            </div>
        </section>
    )
}