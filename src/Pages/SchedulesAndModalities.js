import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

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
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default SchedulesAndModalities