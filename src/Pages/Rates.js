import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import {useFirestore} from 'reactfire'
import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import Warning from '../Components/Warning'

const Rates = () => {
    const FORWARD = '/personalInfo'
    const BACK = '/schedulesAndModalities'

    const queryTables1 = 'rates'

    const refFire = useFirestore();

    const [ratesArray, setRatesArray] = useState();
    const [rate, setRate] = useState('');
    const [rateRequired, setRateRequired] = useState();


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

      const saveSessionInfo = (event) => { 
        let completeData = requiredValidation()


        if(completeData === true){
        sessionStorage.setItem('rate', rate);
        console.log(sessionStorage)
        }else{
          event.preventDefault()
        }
      }


      const requiredValidation = () =>{

        if(rate == '' || typeof rate == 'undefined'){
          setRateRequired(true)
        }else{
          setRateRequired(false)
        }
        if((typeof rate == 'undefined' || rate =='')
        ){
          return false
          
        }else{
          return true
        }
      }

      const onChangeRadio = (event) =>{
        setRate(event.target.value)
        console.log(rate)
    }

    return(
        <div>
            <h1 id="title" className="pageTitle">{messages.rates_title}</h1>
            <form id="form">
            {rateRequired === true &&(
                    <Warning
                     value={messages.rates_rates}
                    />
                     )}
                <label id="titleLabel">{messages.rates_rates}</label>
                <label id="optionLabel">{messages.form_select_option}</label>
                { ratesArray  &&(
                            <div>
                                {ratesArray.map(option =>(
                                    <div className="radio-toolbar">
                                        <input  key={option.id} id={option.id} onChange={onChangeRadio} type="radio" name="ratesRadio" value={option.rate_dcp} required />
                                        <label for={option.id}>{option.rate_dcp}</label>   
                                    </div>
                                ))}
                            </div>
                        )
                        }
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

export default Rates