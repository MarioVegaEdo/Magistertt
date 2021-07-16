import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

import {Link} from 'react-router-dom'
import {messages} from '../StaticResources/messageProperties'
import React,{useEffect, useState} from 'react'
import {simpleCall} from '../Firebase/FirebaseCalls/simpleCall'
import {useFirestore, useFirebaseApp} from 'reactfire'

const Branchs = () => {
    const FORWARD = '/schedulesAndModalities'
    const BACK = '/home'

    const queryTables1 = 'branchs'
    const queryTables2 = 'provinces'

    const refFire = useFirestore();

    const [branchArray, setBranchArray] = useState();
    const [provinceArray, setProvinceArray] = useState();
    const [branch, setBranch] = useState('');
    const [province, setProvince] = useState('');
    const [anteriority, setAnteriority] = useState('');
    

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

      const saveSessionInfo = () => { 
        sessionStorage.setItem('branch', branch);
        sessionStorage.setItem('province', province);
        sessionStorage.setItem('anteriority', anteriority);
        sessionStorage.setItem('material', 'value');
        console.log(sessionStorage)
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

    return(
        <div>
            <h1>{messages.branchs_title}</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formCol">
                        <label id="titleLabel">{messages.branchs_branch_title}</label>
                        <label>{messages.form_select_option}</label>                      
                        { branchArray  &&(
                            <select value={branch} onChange={onChangeSelectBranch} required placeholder="Ej: Maestros - Audición y lenguaje" >
                                <option></option>
                                {branchArray.map(option =>(
                                    <option key={option.id}>{option.branch_name}</option>
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
                    <a>{messages.branchs_remind_link}</a>
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
                    <a>{messages.branchs_material_link}</a>
                    <button onClick={onClickMaterialButton} id="materialButton">{messages.branchs_material_button}</button>
                </div>
            </form>
            <Link to={FORWARD} onClick={saveSessionInfo}>{messages.navbutton_forward}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>
        </div>
    )
}

export default Branchs