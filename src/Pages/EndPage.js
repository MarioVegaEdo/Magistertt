import {messages} from '../StaticResources/messageProperties'
import {Link} from 'react-router-dom'
import {useFirestore, useFirebaseApp} from 'reactfire'

const EndPage = () => {

    const FORWARD = '/webMagister'
    const BACK = '/paidMethod'

    const refFire = useFirestore();
    const DATASAVETABLE = 'enrollments'
    let enrollmentData = {}
    
    const saveOnFirebase = () =>{
        
        refFire.collection(DATASAVETABLE)
        .add(generateEnrollmentData())
        }
    
    const generateEnrollmentData = () =>{
        enrollmentData = {
            DNI : sessionStorage.getItem('dni'),
            anteriority : sessionStorage.getItem('anteriority'),
            branch : sessionStorage.getItem('branch'),
            direcction : sessionStorage.getItem('direction'),
            email : sessionStorage.getItem('email'),
            exam_ac : sessionStorage.getItem('exam_ac'),
            locality : sessionStorage.getItem('locality'),
            movil_phone : sessionStorage.getItem('movil_phone'),
            name : sessionStorage.getItem('name'),
            payment_method : sessionStorage.getItem('payment_method'),
            postal_code : sessionStorage.getItem('postal_code'),
            province : sessionStorage.getItem('province'),
            recommended : sessionStorage.getItem('recommended')
        }
        return enrollmentData
    }

    return(
        <div>
            <img id="logoImg" />
            <h1 id="title">{messages.endPage_title}</h1>
            <span id="plainText">{messages.endPage_title}</span>
            <Link to={FORWARD} onClick={saveOnFirebase} >{messages.navbutton_return_home}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>      
        </div>
    )
}

export default EndPage