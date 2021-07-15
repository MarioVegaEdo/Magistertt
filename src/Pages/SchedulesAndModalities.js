import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'

const SchedulesAndModalities = () => {
    return(
        <div>
            <h1 id="title">title</h1>
            <form id="form">
                <div id="formGroup">
                    <label></label>
                    <label></label>
                    <div id="buttonPanel">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div id="formGroup">
                <label></label>
                    <label></label>
                    <div id="selectOptionPanel">
                        <select></select>
                        <select></select>
                        <select></select>
                    </div>
                </div>
            </form>
            <Link to='/branchs' >branchs</Link>
            <Link to='/rates' >rates</Link>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default SchedulesAndModalities