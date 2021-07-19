import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import Warning from '../Components/Warning'
import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import {useFirestore} from 'reactfire'

const Branchs = () => {
    const FORWARD = '/schedulesAndModalities'
    const BACK = '/index'
    const CONDITIONS_AL = '/conditionsAl'
    const CONDITIONS_MATERIAL = '/conditionsMaterial'

    const queryTables1 = 'branchs'
    const queryTables2 = 'provinces'

    const refFire = useFirestore();

    const [branchArray, setBranchArray] = useState();
    const [provinceArray, setProvinceArray] = useState();
    const [branch, setBranch] = useState('');
    const [province, setProvince] = useState('');
    const [anteriority, setAnteriority] = useState('');
    const [branchRequired, setBranchRequired] = useState();
    const [provinceRequired, setProvinceRequired] = useState();
    const [anteriorityRequired, setAnteriorityRequired] = useState();


  useEffect(() =>{
    fireStoreCallBranchs(queryTables1)
    fireStoreCallProvinces(queryTables2)
  },[])

  const fireStoreCallBranchs = (table) =>{
    refFire
    .collection(table)
    .onSnapshot((snapshot) =>{
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBranchArray(data)
    })
  }

  const fireStoreCallProvinces = (table) =>{
    refFire
    .collection(table)
    .onSnapshot((snapshot) =>{
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProvinceArray(data)
    })
  }

      const onClickMaterialButton  = (event) =>{
        event.preventDefault()
        console.log(branchArray)
        console.log(provinceArray)
      }

      const saveSessionInfo = (event) => { 
        let completeData = requiredValidation()

        if(completeData === true){
          sessionStorage.setItem('branch', branch);
          sessionStorage.setItem('province', province);
          sessionStorage.setItem('anteriority', anteriority);
          sessionStorage.setItem('material', 'value');
          console.log(sessionStorage)
        }else{
          event.preventDefault()
        }
        
      }

      const onChangeSelectBranch = (event) =>{
        setBranch(event.target.value)
        console.log(branch)
      }

      const onChangeSelectProvince = (event) =>{
          setProvince(event.target.value)
          console.log(province)
        }

      const onChangeRadio = (event) =>{
            setAnteriority(event.target.value)
            console.log(anteriority)
        }

      const requiredValidation = () =>{

          
        if(branch == '' || typeof branch == 'undefined'){
          setBranchRequired(true)
        }else{
          setBranchRequired(false)
        }

        if(province == '' || typeof province == 'undefined'){
          setProvinceRequired(true)
        }else{
          setProvinceRequired(false)
        }

        if(anteriority == '' || typeof anteriority == 'undefined'){
          setAnteriorityRequired(true)
        }else{
          setAnteriorityRequired(false)
        }

        if((typeof branch == 'undefined' || branch =='') ||
        (typeof province == 'undefined' || province =='') ||
        (typeof anteriority == 'undefined' || anteriority =='')
        ){
          return false
          
        }else{
        return true
        }
        
      }

    return(
        <div className="flexContainerH">
          <div id="pagesImg" className="flexItemH"></div>
          <div id="pagesContainer" className="flexItemH">
          <h1 id="title" className="pageTitle">{messages.branchs_title}</h1>
          <form id="form" className="sizeForm">
            <div className="formContainer flexContainerV">
              <div className="formContainerH25  flexContainerH " id="formGroup">
                  <div className="flexContainerV selectSizeW50  paddin5">
                    {branchRequired === true &&(
                       <Warning 
                       value={messages.branchs_branch_title}
                     />
                    )}
                    <div className="flexItemV flexContainerV">
                      <label className="flexItemV" id="titleLabel">{messages.branchs_branch_title}</label>
                      <label className="flexItemV" id="optionLabel">{messages.form_select_option}</label>                      
                      { branchArray  &&(
                        <select className="flexItemV" value={branch} onChange={onChangeSelectBranch} required placeholder="Ej: Maestros - Audición y lenguaje" >
                          <option></option>
                          {branchArray.map(option =>(
                            <option key={option.id} value={option.branch_name}>{option.branch_name}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>
                  <div className="flexContainerV selectSizeW50 paddin5">
                    {provinceRequired === true &&(
                      <Warning 
                      value={messages.branchs_province_title}
                    />
                    )}
                    <div className="flexItemV flexContainerV" >
                      <label id="titleLabel" ClassName="flexItemV">{messages.branchs_province_title}</label>
                      <label id="optionLabel" ClassName="flexItemV">{messages.form_select_option}</label>
                      { provinceArray  &&(
                        <select className="flexItemV" value={province} onChange={onChangeSelectProvince} required placeholder="Ej: Madrid" >
                          <option></option>
                          {provinceArray.map(option =>(
                            <option key={option.id}>{option.province_name}</option>
                          ))}
                        </select>
                      )}
                      </div>
                  </div>
              </div>
              
              <div className="formContainerH25  flexContainerV " id="formGroup">
              {anteriorityRequired === true &&(
                      <Warning 
                      value={messages.branchs_material_title}
                    />
                    )}
                <label id="titleLabel" ClassName="flexItemV">{messages.branchs_remind_title}</label>
                <Link to={CONDITIONS_AL} ClassName="flexItemV">{messages.branchs_remind_link}</Link>
                <div className="flexContainerH flexItemV " id="buttonPanel">
                  <div  className="flexItemH33 radio-toolbar">
                    <input onChange={onChangeRadio} type="radio" id="no" name="remindRadio" value="No" />
                    <label id="radioLabel" for="no">{messages.branchs_remind_radio1}</label>
                  </div>
                  <div className="flexItemH33 radio-toolbar">
                    <input onChange={onChangeRadio} type="radio" id="si" name="remindRadio" value="Si"/>
                    <label id="radioLabel" for="si">{messages.branchs_remind_radio2}</label>
                  </div>
                  <div className="flexItemH radio-toolbar">
                    <input onChange={onChangeRadio} type="radio" id="2017" name="remindRadio" value="2017"/>
                    <label id="radioLabel" for="2017">{messages.branchs_remind_radio3}</label>
                  </div>
                </div>   
              </div>
              <div className="flexContainerH flexItemV" id="formGroup">
                <div className="flexContainerV" >
                  <label ClassName="flexItemV" id="titleLabel">{messages.branchs_material_title}</label>
                  <Link ClassName="flexItemV" to={CONDITIONS_MATERIAL} >{messages.branchs_material_link}</Link>
                  <button ClassName="flexItemV" onClick={onClickMaterialButton} id="materialButton">{messages.branchs_material_button}</button>
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
        </div>
    )
}

export default Branchs
