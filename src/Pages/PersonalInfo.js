import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'
const PersonalInfo = () => {
    return(
        <div>
            <h1 id="title">title</h1>
            <form id="form">
                <div id="formRow">
                    <input id="name" type="text" />
                </div>
                <div id="formRow">
                    <div id="formCol">
                        <label></label>
                        <input id="DNI" type="text" />
                    </div>
                    <div id="formCol">
                        <label></label>
                        <input id="phone" type="number" />
                    </div>
                    <div id="formCol">
                        <label></label>
                        <input id="email" type="email" />
                    </div>
                </div>
            </form>
            <Link to='/rates' >Rates</Link>
            <Link to='/direcction' >Direcction</Link>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default PersonalInfo