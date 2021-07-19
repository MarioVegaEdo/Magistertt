import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import {useEffect, useState} from 'react'
import {useFirestore} from 'reactfire'
import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import Warning from '../Components/Warning'

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
    const [dataP, setdataP] = useState('');
    const [legalInfo, setLegalInfo] = useState('');
    const [directionRequired, setDirectionRequired] = useState();
    const [localityRequired, setLocalityRequired] = useState();
    const [provinceRequired, setProvinceRequired] = useState();
    const [examACRequired, setExamACRequired] = useState();
    const [postalCodeRequired, setPostalCodeRequired] = useState();
    const [dataPRequired, setDataPRequired] = useState();
    const [legalInfoRequired, setLegalInfoRequired] = useState();


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

      const saveSessionInfo = (event) => { 
        let completeData = requiredValidation()


        if(completeData === true){
        sessionStorage.setItem('exam_ac', examAC);
        sessionStorage.setItem('direction', direction);
        sessionStorage.setItem('locality', locality);
        sessionStorage.setItem('province', province);
        sessionStorage.setItem('postal_code', postalCode);
        console.log('ssss',sessionStorage)
    }else{
        event.preventDefault()
      }
      }
    
      const requiredValidation = () =>{

        if(examAC == '' || typeof examAC == 'undefined'){
          setExamACRequired(true)
        }else{
            setExamACRequired(false)
        }
  
        if(direction == '' || typeof direction == 'undefined'){
          setDirectionRequired(true)
        }else{
            setDirectionRequired(false)
        }

        if(locality == '' || typeof locality == 'undefined'){
            setLocalityRequired(true)
          }else{
            setLocalityRequired(false)
          }

        if(province == '' || typeof province == 'undefined'){
            setProvinceRequired(true)
          }else{
            setProvinceRequired(false)
          }
          
          if(postalCode == '' || typeof postalCode == 'undefined'){
            setPostalCodeRequired(true)
          }else{
            setPostalCodeRequired(false)
          }
          {/*if(legalInfo == '' ){
            setLegalInfoRequired(true)
          }else{
            setLegalInfoRequired(false)
          }
          if(dataP == '' ){
            setDataPRequired(true)
          }else{
            setDataPRequired(false)
          }*/}
          console.log(examAC,direction,locality,province,postalCode)
        if((typeof examAC == 'undefined' || examAC =='') ||
        (typeof direction == 'undefined' || direction =='') ||
        (typeof locality == 'undefined' || locality =='') ||
        (typeof province == 'undefined' || province =='') ||
        (typeof postalCode == 'undefined' || postalCode =='')      ){
          console.log(examAC,direction,locality,province,postalCode)
          return false
           {/*  ||
  dataP == '' ||
        legalInfo == ''*/}
        }else{
          return true
        }
        
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
      const handleLegalInfo = (event) =>{

      }

      const handleDataP= (event) =>{

     }

    return(
        <div>
            <h1 id="title">{messages.direction_title}</h1>
            <form>
                <div id="formGroup" >
                    <div id="formRow">
                    {examACRequired === true &&(
                        <Warning
                        value={messages.direction_exam_ac}
                        />
                        )}
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
                    {directionRequired === true &&(
                            <Warning
                            value={messages.direction_direction}
                            />
                            )}
                       <label id="titleLabel">{messages.direction_direction}</label> 
                       <input onChange={handleChangeDirection} id="direcction" type="text" />
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol" >
                            {localityRequired === true &&(
                                <Warning
                                value={messages.direction_locality}
                                />
                            )}
                            <label id="titleLabel">{messages.direction_locality}</label>
                            <input onChange={handleChangeLocality} id="locality" type="text" />
                        </div>
                        <div id="formCol" >
                            {provinceRequired === true &&(
                            <Warning
                            value={messages.direction_province}
                            />
                            )}
                            <label id="titleLabel">{messages.direction_province}</label>
                            <input onChange={handleChangeProvince} id="province" type="text" />
                        </div>
                        <div id="formCol" >
                        {postalCodeRequired === true &&(
                            <Warning
                            value={messages.direction_postal_code}
                            />
                        )}
                            <label id="titleLabel">{messages.direction_postal_code}</label>
                            <input onChange={handleChangePostalCode} id="postalCode" type="text" pattern="[0-9]{5}" />
                        </div>
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol">
                            <input id="legalInfo"type="checkbox" onChange={handleLegalInfo}/>
                            <label>
                                {messages.direction_acept}
                                <Link to={LEGALINFO} >{messages.direction_legal_link}</Link>
                            </label>
                        </div>
                        <div id="formCol">
                            <input id="dataProt"type="checkbox" onChange={handleDataP} />
                            <label>
                                {messages.direction_acept}
                                <Link to={DATA_PRO} >{messages.direction_data_pro_link}</Link>
                            </label>
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

export default Direction