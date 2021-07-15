import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

const Home = () => {
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
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default Home