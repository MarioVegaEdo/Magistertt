import NavigationButtonPanel from '../Components/NavigationButtonPanel'
import { messages } from '../StaticResources/messageProperties'
import React, { useEffect, useState } from 'react'
import { useFirestore} from 'reactfire'
import Warning from '../Components/Warning'

const SchedulesAndModalities = () => {

    const FORWARD = '/rates'
    const BACK = '/branchs'

    const queryTables1 = 'modalities'
    const queryTables2 = 'schedules'

    const refFire = useFirestore();

    const [modalitiesArray, setModalitiesArray] = useState();
    const [schendulesArray, setSchendulesArray] = useState();
    const [schendule, setSchendule] = useState('');
    const [modality, setModality] = useState('');
    const [schenduleRequired, setSchenduleRequired] = useState();
    const [modalityRequired, setModalityRequired] = useState();


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

    const onChangeRadioM = (event) =>{
        setModality(event.target.value)
        console.log(modality)
    }

    const onChangeRadioS = (event) =>{
        setSchendule(event.target.value)
        console.log(schendule)
    }

    const saveSessionInfo = (event) => {
        let completeData = requiredValidation()


        if(completeData === true){
            sessionStorage.setItem('modality', modality);
            sessionStorage.setItem('schedule', schendule);
            console.log(sessionStorage)
          }else{
            event.preventDefault()
          }
        
        
    }

    const requiredValidation = () =>{

      if(schendule == '' || typeof schendule == 'undefined'){
        setSchenduleRequired(true)
      }else{
        setSchenduleRequired(false)
      }

      if(modality == '' || typeof modality == 'undefined'){
        setModalityRequired(true)
      }else{
        setModalityRequired(false)
      }
      if((typeof schendule == 'undefined' || schendule =='') ||
      (typeof modality == 'undefined' || modality =='') 
      ){
        return false
        
      }else{
        return true
      }
      
    }

    return (
        <div>
            <h1 id="title" className="pageTitle">{messages.schedulesAndModalities_title}</h1>
            <form id="form"  >
                <div id="formGroup">
                {modalityRequired === true &&(
                    <Warning
                     value={messages.schedulesAndModalities_modality}
                    />
                     )}
                    <label id="titleLabel">{messages.schedulesAndModalities_modality}</label>
                    <label id="optionLabel">{messages.form_select_option}</label>
                    <div className="radio-toolbar" id="buttonPanel">
                        <div id="radioRow">
                        { modalitiesArray  &&(
                            <div>
                                {modalitiesArray.map(option =>(
                                    <div>
                                        <input  key={option.id} onChange={onChangeRadioM} id={option.id} type="radio" name="modalityRadio" value={option.modality_name} />
                                        <label for={option.id}>{option.modality_name}</label>   
                                    </div>
                                ))}
                            </div>
                        )
                        }
                        </div>
                    </div>
                </div>
                <div id="formGroup">
                {schenduleRequired === true &&(
                    <Warning
                    value={messages.schedulesAndModalities_schedules}
                   />
                     )}
                    <label id="titleLabel">{messages.schedulesAndModalities_schedules}</label>
                    <label id="optionLabel">{messages.form_select_option}</label>
                    <div className="radio-toolbar" id="buttonPanel">
                        <div id="radioRow">
                        { schendulesArray  &&(
                            <div>
                                {schendulesArray.map(option =>(
                                    <div>
                                        <input  key={option.id} onChange={onChangeRadioS} id={option.id} type="radio" name="schenduleRadio" value={option.schedule_dcp} />
                                        <label for={option.id}>{option.schedule_dcp}</label>   
                                    </div>
                                ))}
                            </div>
                        )
                        }
                        </div>
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

export default SchedulesAndModalities