import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {Link} from 'react-router-dom'
const Rates = () => {
    return(
        <div>
            <h1 id="title">title</h1>
            <form id="form">
                <label></label>
                <label></label>
                <div id="formGroup">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </form>
            <Link to='/schendulesAndModalities' >schendulesAndModalities</Link>
            <Link to='/personalInfo' >personalInfo</Link>       
        </div>
    )
}

export default Rates