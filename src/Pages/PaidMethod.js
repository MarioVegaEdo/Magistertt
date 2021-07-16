import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'
import {useFirestore, useFirebaseApp} from 'reactfire'

const PaidMethod = () => {
    const refFire = useFirestore();
    const saveOnFirebase = () =>{
        refFire.collection('enrollments').add({
                    saludo:'hola',
                    despedida:('adios')
                })
        }

    return(
        <div>
            <h1 id="title">title</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formRow">
                        <div id="formCol" >
                           <label></label>
                           <button></button>
                           <button></button>
                           <a></a>
                        </div>
                    </div>
                    <div id="formRow">
                        <div id="formCol" >
                            <label></label>
                            <button></button>
                            <button></button>
                            <a></a>
                        </div>
                    </div>
                </div>
            </form>
            <Link to='/endPage' >endPage</Link>
            <Link to='/direcction' >Direcction</Link>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default PaidMethod