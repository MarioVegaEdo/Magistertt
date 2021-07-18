import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
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
          console.log('prevent',branchRequired)
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

          console.log('AGUNA VACIA')
        if(branch == '' || typeof branch == 'undefined'){
          setBranchRequired(true)
          console.log('1 branch vacía')
          console.log('1b',branch)
        }else{
          setBranchRequired(false)
          console.log('2 branch tiene valor')
          console.log('2b',branch)
        }

        if(province == '' || typeof province == 'undefined'){
          setProvinceRequired(true)
          console.log('1 province vacía')
          console.log('1b',province)
        }else{
          setProvinceRequired(false)
          console.log('2 province tiene valor')
          console.log('2b',province)
        }

        if(anteriority == '' || typeof anteriority == 'undefined'){
          setAnteriorityRequired(true)
          console.log('1 anteriority vacía')
          console.log('1b',anteriority)
        }else{
          setAnteriorityRequired(false)
          console.log('2 anteriority tiene valor')
          console.log('2b',anteriority)
        }

        if((typeof branch == 'undefined' || branch =='') ||
        (typeof province == 'undefined' || province =='') ||
        (typeof anteriority == 'undefined' || anteriority =='')
        ){
          console.log('AGUNA VACIA')
          return false
          
        }else{console.log('Todo bien')
        return true
        }
        
      }

    return(
        <div>
            <h1>{messages.branchs_title}</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formCol">
                      {branchRequired === true &&(
                        <div>
                          falta este crack
                        </div>
                      )}
                        <label id="titleLabel">{messages.branchs_branch_title}</label>
                        <label>{messages.form_select_option}</label>                      
                        { branchArray  &&(
                            <select value={branch} onChange={onChangeSelectBranch} required placeholder="Ej: Maestros - Audición y lenguaje" >
                                <option></option>
                                {branchArray.map(option =>(
                                    <option key={option.id} value={option.branch_name}>{option.branch_name}</option>
                                ))}
                            </select>
                        )
                        }
                    </div>
                    <div id="formCol">
                        <label id="titleLabel">{messages.branchs_province_title}</label>
                        <label>{messages.form_select_option}</label>
                        { provinceArray  &&(
                            <select value={province} onChange={onChangeSelectProvince} required placeholder="Ej: Madrid" >
                                <option></option>
                                {provinceArray.map(option =>(
                                    <option key={option.id}>{option.province_name}</option>
                                ))}
                            </select>
                        )
                        }
                    </div>
                </div>
                <div id="formRow">
                    <label id="titleLabel">{messages.branchs_remind_title}</label>
                    <Link to={CONDITIONS_AL} >{messages.branchs_remind_link}</Link>
                    <div id="buttonPanel">
                        <div id="radioCol">
                            <input onChange={onChangeRadio} type="radio" id="no" name="remindRadio" value="No" required/>
                            <label id="radioLabel">{messages.branchs_remind_radio1}</label>
                        </div>
                        <div id="radioCol">
                            <input onChange={onChangeRadio} type="radio" id="si" name="remindRadio" value="Si"/>
                            <label id="radioLabel">{messages.branchs_remind_radio2}</label>
                        </div>
                        <div id="radioCol">
                            <input onChange={onChangeRadio} type="radio" id="2017" name="remindRadio" value="2017"/>
                            <label id="radioLabel">{messages.branchs_remind_radio3}</label>
                        </div>
                    </div>
                </div>
                <div id="formRow"> 
                    <label id="titleLabel">{messages.branchs_material_title}</label>
                    <Link to={CONDITIONS_MATERIAL} >{messages.branchs_material_link}</Link>
                    <button onClick={onClickMaterialButton} id="materialButton">{messages.branchs_material_button}</button>
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

export default Branchs