import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'
const Direcction = () => {
    return(
        <div>
            <h1 id="title">title</h1>
            <form>
                <div id="formGroup" >
                    <div id="formRow">
                       <label></label> 
                       <label></label>
                       <select></select>
                    </div>
                </div>
                <div id="formGroup" >
                <div id="formRow">
                       <label></label> 
                       <label></label>
                       <input id="direcction" type="text" />
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol" >
                            <label></label>
                            <input id="locality" type="text" />
                        </div>
                        <div id="formCol" >
                            <label></label>
                            <input id="province" type="text" />
                        </div>
                        <div id="formCol" >
                            <label></label>
                            <input id="postalCode" type="number" />
                        </div>
                    </div>
                </div>
                <div id="formGroup" >
                    <div id="formRow">
                        <div id="formCol">
                            <input id="legalInfo"type="checkbox" ></input>
                        </div>
                        <div id="formCol">
                            <input id="dataProt"type="checkbox" ></input>
                        </div>
                    </div>
                </div>
            </form>
            <Link to='/direcction' >Direcction</Link>
            <Link to='/home' >HOME</Link>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default Direcction