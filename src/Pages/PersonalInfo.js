import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

const PersonalInfo = () => {

    const FORWARD = '/direction'
    const BACK = '/rates'

    const [name, setName] = useState('');
    const [dni, setDni] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const saveSessionInfo = () => { 
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('dni', dni);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('email', email);
        console.log(sessionStorage)
      }
    
    const handleChangeName = (event) =>{
        event.preventDefault();
        setName(event.target.value)
    }

    const handleChangeDni = (event) =>{
        event.preventDefault();
        setDni(event.target.value)
    }

    const handleChangePhone = (event) =>{
        event.preventDefault();
        setPhone(event.target.value)
    }

    const handleChangeEmail = (event) =>{
        event.preventDefault();
        setEmail(event.target.value)
    }

    return(
        <div>
            <h1 id="title">{messages.personalInfo_title}</h1>
            <form id="form">
                <div id="formRow">
                    <label>{messages.personalInfo_name}</label>
                    <input
                    value={name} onChange={handleChangeName}
                    id="name" type="text" placeholder="Ej:Jhon Doe"/>
                </div>
                <div id="formRow">
                    <div id="formCol">
                        <label>{messages.personalInfo_DNI}</label>
                        <input 
                        value={dni} onChange={handleChangeDni}
                        id="DNI" type="text" placeholder="Ej:11111111X" pattern='((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))'/>
                    </div>
                    <div id="formCol">
                        <label>{messages.personalInfo_phone}</label>
                        <input
                        value={phone} onChange={handleChangePhone}
                        id="phone" type="text" placeholder="Ej:666666666" pattern="[0-9]{9}"/>
                    </div>
                    <div id="formCol">
                        <label>{messages.personalInfo_email}</label>
                        <input
                        value={email} onChange={handleChangeEmail}
                        id="email" type="email" placeholder="Ej:JhonDoe@mail.com"/>
                    </div>
                </div>
            </form>
            <NavigationButtonPanel
                 action={saveSessionInfo}
                 forwardPath={FORWARD}
                 forwardText={messages.navbutton_forward}
                 backPath={BACK}
                 backText={messages.navbutton_back}
            />
            </div>
    )
}

export default PersonalInfo