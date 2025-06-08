import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

export default function Consultation() {


    const [form, setForm] = useState({
        name: '',
        phone: ''
    })


    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(11)
    }

    return (
        <>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h2>Отправьте заявку на консультацию </h2>
                    <div className="container-input">
                        <label htmlFor="name">ФИО</label>
                        <input  required type="text" id="name" name="name" placeholder="Иванов Иван Иванович" onChange={handleChange} />
                    </div>
                    <div className="container-input">
                        <label htmlFor="phone">Номер телефона</label>
                        <input  required type="text" id="name" value={form.phone} name="phone" placeholder="+7 (902) 228 14 88" onChange={handleChange} />
                    </div>
                    <div className="container-buttons">
                        <button type={"submit"}  className='main-btn'>Отправить</button>
                        <NavLink to='/'>
                            <button type={'button'} className='secondary-btn'>На главную</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    )
}

