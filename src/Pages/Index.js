import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {messages} from '../StaticResources/messageProperties'
import {Link} from 'react-router-dom'

const Home = () => {

    const FORWARD = '/branchs'
    const BACK = '/webMagister'

    return(
        <div>
            <img id="logoImg" />
            <h1 id="title">{messages.home_title}</h1>
            <span id="plainText">{messages.home_text}</span>
            <div>
            
            <Link to={FORWARD} >{messages.navbutton_start}</Link>
            <Link to={BACK} >{messages.navbutton_back}</Link>
            </div>
            {/*<NavigationButtonPanel
                forward={FORWARD}
                back={BACK}
            />*/}        
        </div>
    )
}

export default Home