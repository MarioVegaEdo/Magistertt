import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {messages} from '../StaticResources/messageProperties'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import Branchs from './Branchs'

const Home = () => {
    const FORWARD = 'branchs'
    const BACK = 'web.magister.com'
    return(
        <div>
            <img id="logoImg" />
            <h1 id="title">{messages.home_title}</h1>
            <span id="plainText">{messages.home_text}</span>
            <div>
            
            <Link to='/branchs' >BranchsHome</Link>
            </div>
            {/*<NavigationButtonPanel
                forward={FORWARD}
                back={BACK}
            />*/}        
        </div>
    )
}

export default Home