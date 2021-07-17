import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import {simpleCall} from '../Firebase/FirebaseCalls/simpleCall'
import {useFirestore, useFirebaseApp} from 'reactfire'

const Rates = () => {
    const FORWARD = '/personalInfo'
    const BACK = '/schedulesAndModalities'

    const queryTables1 = 'rates'

    const refFire = useFirestore();

    const [ratesArray, setRatesArray] = useState();
    const [rate, setRate] = useState('');

    useEffect(() =>{
        fireStoreCallBranchs(queryTables1)
      },[])
    
      const fireStoreCallBranchs = (table) =>{
        refFire
        .collection(table)
        .onSnapshot((snapshot) =>{
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRatesArray(data)
        })
      }

      const saveSessionInfo = () => { 
        sessionStorage.setItem('rate', rate);
        console.log(sessionStorage)
      }

      const onChangeRadio = (event) =>{
        setRate(event.target.value)
        console.log(rate)
    }

    return(
        <div>
            <h1 id="title">{messages.rates_title}</h1>
            <form id="form">
                <label id="formTitle">{messages.rates_rates}</label>
                <label>{messages.form_select_option}</label>
                { ratesArray  &&(
                            <div>
                                {ratesArray.map(option =>(
                                    <div>
                                        <input  key={option.id} onChange={onChangeRadio} type="radio" name="ratesRadio" value={option.rate_dcp} required />
                                        <label>{option.rate_dcp}</label>   
                                    </div>
                                ))}
                            </div>
                        )
                        }
            </form>
            <Link to={FORWARD} onClick={saveSessionInfo}>{messages.navbutton_forward}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>
        </div>
    )
}

export default Rates