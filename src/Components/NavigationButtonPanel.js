import {Link} from 'react-router-dom'

const NavigationButtonPanel = (props) => {
    
    
    const forwardPath = props.forwardPath
    const forwardText = props.forwardText
    const backPath = props.backPath
    const backText = props.backText

    return(
        <div id="navigationContainer">
            <Link className="linkToButton forwardButton navigationContainerItem" onClick={props.action} to={forwardPath} >{forwardText}</Link>
            <Link className="linkToButton backButton navigationContainerItem" to={backPath} >{backText}</Link>
        </div>
        
    )
}

export default NavigationButtonPanel
