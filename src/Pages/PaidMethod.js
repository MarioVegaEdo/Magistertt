import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

const PaidMethod = () => {
    return(
        <div>
            <h1 id="title">title</h1>
            <form id="form">
                <div id="formGroup">
                    <div id="formRow">
                        <div id="formCol" >
                           <label></label>
                           <button></button>
                           <button></button>
                           <a></a>
                        </div>
                    </div>
                    <div id="formRow">
                        <div id="formCol" >
                            <label></label>
                            <button></button>
                            <button></button>
                            <a></a>
                        </div>
                    </div>
                </div>
            </form>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default PaidMethod