import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import {useState} from 'react'
import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

const PaidMethod = () => {

    const FORWARD = '/endPage'
    const BACK = '/direction'
    const DETAILS = '/paisDetails'
    const LEGALINFO = '/legalInfo'
   
    const [paidMethod, setPaidMethod] = useState('');
    const [recommended, setRecommended] = useState('');

    const saveSessionInfo = () => { 
        sessionStorage.setItem('recommended', recommended);
        sessionStorage.setItem('paidMethod', paidMethod);
        console.log(sessionStorage)
      }
        const onChangeRadioPaidMethod = (event) =>{
            setPaidMethod(event.target.value)
        }

        const onChangeRadioRecommended = (event) =>{
            setRecommended(event.target.value)
        }
    return(
        <div>
            <h1 id="title">{messages.paidMethod_title}</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formRow">
                        <div id="formCol" >
                           <label>{messages.paidMethod_paid_method}</label>
                            <div id="radioPanel">
                                <div id="radioCol">
                                    <input onChange={onChangeRadioPaidMethod} type="radio" id="paid" name="remindRadio" value="Tarjeta" required/>
                                    <label id="radioLabel1">{messages.paidMethod_paid_method_radio1}</label>
                                </div>
                                <div id="radioCol">
                                    <input onChange={onChangeRadioPaidMethod} type="radio" id="paid" name="remindRadio" value="Transferencia" required/>
                                    <label id="radioLabel2">{messages.paidMethod_paid_method_radio2}</label>
                                </div>
                            </div>
                           <Link to={DETAILS} >{messages.paidMethod_details_link}</Link>
                        </div>
                    </div>
                    <div id="formRow">
                        <div id="formCol" >
                            <label>{messages.paidMethod_recomendation}</label>
                            <div id="radioPanel">
                                <div id="radioCol">
                                    <input onChange={onChangeRadioRecommended} type="radio" id="recommended" name="remindRadio" value="Tarjeta" required/>
                                    <label id="radioLabel1">{messages.paidMethod_recommended_radio1}</label>
                                </div>
                                <div id="radioCol">
                                    <input onChange={onChangeRadioRecommended} type="radio" id="recommended" name="remindRadio" value="Transferencia" required/>
                                    <label id="radioLabel2">{messages.paidMethod_recommended_radio2}</label>
                                </div>
                            </div>
                            <Link to={LEGALINFO} >{messages.paidMethod_legal_info_link}</Link>
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

export default PaidMethod