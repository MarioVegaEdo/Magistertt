import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'
const Home = () => {
    const FORWARD = 'schedulesAndModalities'
    const BACK = 'home'
    return(
        <div>
            <h1>title</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formCol">
                        <label></label>
                        <label></label>
                        <input id="branch" type="text" />
                    </div>
                    <div id="formCol">
                        <label></label>
                        <label></label>
                        <input id="province" type="text" />
                    </div>
                </div>
                <div id="formRow">
                    <label></label>
                    <a></a>
                    <div id="buttonPanel">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div id="formRow"> 
                    <label></label>
                    <a></a>
                    <input id="branch" type="button" />
                </div>
            </form>
            <Link to='/direcction' >Direcction</Link>
            <Link to='/home' >HOME</Link>
        </div>
    )
}

export default Home