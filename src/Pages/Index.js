import NavigationButtonPanel from '../Components/NavigationButtonPanel' 
import {messages} from '../StaticResources/messageProperties'

const Home = () => {

    const FORWARD = '/branchs'
    const BACK = '/webMagister'
    const imgPath = '../StaticResources/images/index.jpg'

    return(
        <div className="homeBody">
            <img src={imgPath}  id="logoImg" />
            <h1 id="title" className="homeTitle">{messages.home_title}</h1>
            <div id="plainText">{messages.home_text}</div>
            <div>
            </div>
            <NavigationButtonPanel
                 forwardOnClick={() => {}}
                 forwardPath={FORWARD}
                 forwardText={messages.navbutton_start}
                 backPath={BACK}
                 backText={messages.navbutton_back}
            />        
        </div>
    )
}

export default Home