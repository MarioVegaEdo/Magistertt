import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import {useState} from 'react'
import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import Warning from '../Components/Warning'

const PaidMethod = () => {

    const FORWARD = '/endPage'
    const BACK = '/direction'
    const DETAILS = '/paisDetails'
    const LEGALINFO = '/legalInfo'
   
    const [paidMethod, setPaidMethod] = useState('');
    const [recommended, setRecommended] = useState('');
    const [paidMethodRequired, setPaidMethodRequired] = useState();
    const [recommendedRequired, setRecommendedRequired] = useState();

    const saveSessionInfo = (event) => { 
        let completeData = requiredValidation()

        if(completeData === true){
        sessionStorage.setItem('recommended', recommended);
        sessionStorage.setItem('payment_method', paidMethod);
        console.log(sessionStorage)
    }else{
        event.preventDefault()
      }
      }

      const requiredValidation = () =>{
          
        if(recommended == '' || typeof recommended == 'undefined'){
          setRecommendedRequired(true)
        }else{
            setRecommendedRequired(false)
        }

        if(paidMethod == '' || typeof paidMethod == 'undefined'){
            setPaidMethodRequired(true)
        }else{
            setPaidMethodRequired(false)
        }

        if((typeof recommended == 'undefined' || recommended =='') ||
        (typeof paidMethod == 'undefined' || paidMethod =='') ){
          return false
          
        }else{
            return true
        }
        
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
                        { paidMethodRequired === true &&(
                            <Warning 
                            value={messages.paidMethod_paid_method}
                            />
                        )}
                            <label>{messages.paidMethod_paid_method}</label>
                            <div id="radioPanel">
                                <div id="radioCol" className="radio-toolbar">
                                    <input onChange={onChangeRadioPaidMethod} type="radio" id="paidT" name="remindRadio" value="Tarjeta"/>
                                    <label for="paidT" id="radioLabel1">{messages.paidMethod_paid_method_radio1}</label>
                                </div>
                                <div id="radioCol" className="radio-toolbar">
                                    <input onChange={onChangeRadioPaidMethod} type="radio" id="paidTrans" name="remindRadio" value="Transferencia"/>
                                    <label for="paidTrans" id="radioLabel2">{messages.paidMethod_paid_method_radio2}</label>
                                </div>
                            </div>
                           <Link to={DETAILS} >{messages.paidMethod_details_link}</Link>
                        </div>
                    </div>
                    <div id="formRow">
                        <div id="formCol" >
                        {recommendedRequired === true &&(
                            <Warning 
                            value={messages.paidMethod_recomendation}
                            />
                        )}
                            <label>{messages.paidMethod_recomendation}</label>
                            <div id="radioPanel">
                                <div id="radioCol" className="radio-toolbar">
                                    <input onChange={onChangeRadioRecommended} type="radio" id="recommended1" name="recommendedRadio" value="No"/>
                                    <label for="recommended1" id="radioLabel1">{messages.paidMethod_recommended_radio1}</label>
                                </div>
                                <div id="radioCol" className="radio-toolbar">
                                    <input onChange={onChangeRadioRecommended} type="radio" id="recommended2" name="recommendedRadio" value="Si" />
                                    <label  for="recommended2" id="radioLabel2">{messages.paidMethod_recommended_radio2}</label>
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