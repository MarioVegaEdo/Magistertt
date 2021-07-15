import NavigationButtonPanel from '../Components/NavigationButtonPanel' 

const Home = () => {
    return(
        <div>
            <img id="logoImg">Logo</img>
            <h1 id="title">title</h1>
            <span id="plainText">text</span>
            <NavigationButtonPanel
            forward=""
            back=""
            />        
        </div>
    )
}

export default Home