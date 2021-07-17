import NavigationButtonPanel from '../Components/NavigationButtonPanel'
import { Link } from 'react-router-dom'
import { messages } from '../StaticResources/messageProperties'
import React, { useEffect, useState } from 'react'
import { useFirestore, useFirebaseApp } from 'reactfire'

const SchedulesAndModalities = () => {

    const FORWARD = '/rates'
    const BACK = '/branchs'

    const queryTables1 = 'modalities'
    const queryTables2 = 'schendules'

    const refFire = useFirestore();

    const [modalitiesArray, setModalitiesArray] = useState();
    const [schendulesArray, setSchendulesArray] = useState();
    const [schendule, setSchendule] = useState('');
    const [modality, setModality] = useState('');

    useEffect(() => {
        fireStoreCallModalities(queryTables1)
        fireStoreCallSchendules(queryTables2)
    }, [])

    const fireStoreCallModalities = (table) => {
        refFire
            .collection(table)
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setModalitiesArray(data)
            })
    }

    const fireStoreCallSchendules = (table) => {
        refFire
            .collection(table)
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setSchendulesArray(data)
            })
    }

    const onChangeRadio = (event) =>{
        setModality(event.target.value)
        console.log(modality)
    }

    const saveSessionInfo = () => {
        sessionStorage.setItem('modality', modality);
        sessionStorage.setItem('schendule', schendule);
        console.log(sessionStorage)
    }

    return (
        <div>
            <h1 id="title">{messages.schedulesAndModalities_title}</h1>
            <form id="form">
                <div id="formGroup">
                    <label id="titleLabel">{messages.schedulesAndModalities_modality}</label>
                    <label>{messages.form_select_option}</label>
                    <div id="buttonPanel">
                        <div id="radioRow">
                        { modalitiesArray  &&(
                            <div>
                                {modalitiesArray.map(option =>(
                                    <div>
                                        <input  key={option.id} onChange={onChangeRadio} type="radio" name="modalityRadio" value={option.modality_name} required />
                                        <label>{option.modality_name}</label>   
                                    </div>
                                ))}
                            </div>
                        )
                        }
                        </div>
                    </div>
                </div>
                <div id="formGroup">
                    <label id="titleLabel">{messages.schedulesAndModalities_schedules}</label>
                    <label>{messages.form_select_option}</label>
                    <div id="selectOptionPanel">
                        <select></select>
                        <select></select>
                        <select></select>
                    </div>
                </div>
            </form>
            <Link to={FORWARD} onClick={saveSessionInfo}>{messages.navbutton_forward}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>
            
        </div>
    )
}

export default SchedulesAndModalities