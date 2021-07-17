import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import {simpleCall} from '../Firebase/FirebaseCalls/simpleCall'
import {useFirestore, useFirebaseApp} from 'reactfire'

const Direction = () => {

    const FORWARD = '/paidMethod'
    const BACK = '/personalInfo'
    const DATA_PRO = '/dataPro'
    const LEGALINFO = '/legalInfo'
    
    const queryTables1 = 'autonomous_communities'
    const refFire = useFirestore();

    const [direction, setDirection] = useState('');
    const [locality, setLocality] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [examACArray, setExamACArray] = useState();
    const [examAC, setExamAC] = useState('');

    useEffect(() =>{
        fireStoreCallProvince(queryTables1)
      },[])
    
      const fireStoreCallProvince = (table) =>{
        refFire
        .collection(table)
        .onSnapshot((snapshot) =>{
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setExamACArray(data)
        })
      }

      const saveSessionInfo = () => { 
        sessionStorage.setItem('eman_ac', examAC);
        sessionStorage.setItem('direction', direction);
        sessionStorage.setItem('locality', locality);
        sessionStorage.setItem('province', province);
        sessionStorage.setItem('postal_code', postalCode);
        console.log(sessionStorage)
      }

      const handleChangeDirection = (event) =>{
        event.preventDefault();
        setDirection(event.target.value)
    }

    const handleChangeLocality = (event) =>{
        event.preventDefault();
        setLocality(event.target.value)
    }

    const handleChangeProvince = (event) =>{
        event.preventDefault();
        setProvince(event.target.value)
    }

    const handleChangePostalCode = (event) =>{
        event.preventDefault();
        setPostalCode(event.target.value)
    }

    const onChangeSelectExamAC = (event) =>{
        setExamAC(event.target.value)
      }

    return(
        <div>
            <h1 id="title">{messages.direction_title}</h1>
            <form>
                <div id="formGroup" >
                    <div id="formRow">
                       <label id="titleLabel">{messages.direction_exam_ac}</label> 
                       <label>{messages.form_select_option}</label>
                       { examACArray  &&(
                            <select value={examAC} onChange={onChangeSelectExamAC} required placeholder="Ej: Maestros - Audición y lenguaje" >
                                <option></option>
                                {examACArray.map(option =>(
                                    <option key={option.id}>{option.ac_name}</option>
                                ))}
                            </select>
                        )
                        }
                    </div>
                </div>
                <div id="formGroup" >
                <div id="formRow">
                       <label id="titleLabel">{messages.direction_direction}</label> 
                       <input id="direcction" type="text" />
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol" >
                            <label id="titleLabel">{messages.direction_locality}</label>
                            <input id="locality" type="text" />
                        </div>
                        <div id="formCol" >
                            <label id="titleLabel">{messages.direction_province}</label>
                            <input id="province" type="text" />
                        </div>
                        <div id="formCol" >
                            <label id="titleLabel">{messages.direction_postal_code}</label>
                            <input id="postalCode" type="text" pattern="[0-9]{5}" />
                        </div>
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol">
                            <input id="legalInfo"type="checkbox" />
                            <label>
                                {messages.direction_acept}
                                <Link to={LEGALINFO} >{messages.direction_legal_link}</Link>
                            </label>
                        </div>
                        <div id="formCol">
                            <input id="dataProt"type="checkbox" />
                            <label>
                                {messages.direction_acept}
                                <Link to={DATA_PRO} >{messages.direction_data_pro_link}</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <Link to={FORWARD} onClick={saveSessionInfo}>{messages.navbutton_forward}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>
        </div>
    )
}

export default Direction