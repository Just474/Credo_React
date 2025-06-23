import React, {useState} from 'react';
import ModalPortal from "../ModalPortal";



export default function ModalWindowCart({isOpen, onClose, children}) {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        commentary: ''
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div className="wrapper--module-window">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Отправьте заявку на покупку</h2>
                    <div className="container-input">
                        <label htmlFor="name">ФИО</label>
                        <input
                            required
                            type="text"
                            name={'name'}
                            value={form.name}
                            id={'name'}
                            placeholder="Иванов Иван Иванович"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-input">
                        <label htmlFor="phone">Номер телефона</label>
                        <input
                            required
                            type="number"
                            id={'phone'}
                            name={'phone'}
                            value={form.phone}
                            placeholder="+7 (902) 228 14 88"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-input">
                        <label htmlFor="mail">Почта</label>
                        <input
                            required
                            type="mail"
                            id={'mail'}
                            name={'email'}
                            value={form.email}
                            placeholder="Ivan@gmail.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-input">
                        <label htmlFor="commentary">Комментарий к заказу</label>
                        <textarea
                            required
                            name="commentary"
                            id="commentary"
                            value={form.commentary}
                            onChange={handleChange}>
                        </textarea>
                    </div>
                    <div className="container-buttons">
                        <button
                            className={'secondary-btn'}
                            onClick={onClose}>
                            Назад
                        </button>
                        <button className={'main-btn'} type={"submit"}>Отправить</button>
                    </div>
                </form>
            </div>
        </ModalPortal>
    );
}

