import React, {useState} from "react";
import vertical from "../../assets/icons/verticalLine.svg";
import horizontal from "../../assets/icons/horizontal.svg";


export default function SectionFAQ() {

  const questions = [
      {
          question: "Как начать работу с вашей компанией?",
          answer: "Вы можете оставить заявку на нашем сайте или позвонить по телефону. Наш менеджер проконсультирует вас и поможет выбрать подходящие услуги."
      },
      {
          question: "Какие бухгалтерские услуги вы предоставляете?",
          answer: "Мы предлагаем полный комплекс бухгалтерских услуг: ведение учета, сдача отчетности, налоговое консультирование, восстановление учета и другие."
      },
      {
          question: "Сколько стоит автоматизация учета?",
          answer: "Стоимость зависит от масштабов вашего бизнеса и необходимого функционала. После анализа потребностей мы подготовим индивидуальное коммерческое предложение."
      },
      {
          question: "Вы работаете с ИП и ООО?",
          answer: "Да, мы работаем как с индивидуальными предпринимателями, так и с организациями всех форм собственности."
      },
  ]

    const [isOpenArray, setIsOpenArray] = useState([])

    function toggleQuestion(index) {
        isOpenArray.includes(index)
            ? setIsOpenArray([...isOpenArray.filter(element => element !== index)])
            : setIsOpenArray([...isOpenArray, index])
      ;}

    return (
        <>
            <section className="sectionFAQ">
                <h2>Часто задаваемые вопросы</h2>
                <p>Здесь вы найдете ответы на свои жизненные вопросы и узнаете, почему стоит использовать наш
                    потрясающий продукт</p>
                <div className="container-questions">
                    {questions.map((question, index) => (
                     <>
                         <div className="question" onClick={() => toggleQuestion(index)} >
                             <p>{question.question}</p>
                             <div className="container-icon">
                                 <img className={'plus' + (isOpenArray.includes(index) ? ' active' : '')} src={vertical} alt="Вертикальная линия"/>
                                 <img  className='plus' src={horizontal} alt="Горизонтальная линия"/>
                             </div>
                         </div>
                        <div className={'answer' + (isOpenArray.includes(index) ? ' active' : '')}>
                            <p>{question.answer}</p>
                        </div>
                     </>

                    ))}

                </div>
            </section>
        </>
    )
}