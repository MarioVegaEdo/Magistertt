import './App.css';
import NavigationTree from './Components/NavigationTree'
import Home from './Pages/Home'
import Branchs from './Pages/Branchs'
import SchedulesAndModalities from './Pages/SchedulesAndModalities'
import Rates from './Pages/Rates'
import PersonalInfo from './Pages/PersonalInfo'
import Direcction from './Pages/Direcction'
import PaidMethod from './Pages/PaidMethod'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

function App() {
  
  return (
    <div>
      {/*<NavigationTree />*/}
      <BrowserRouter>
      <Switch>
        <Route exact path={['/home','/']} component={Home} />
        <Route path={'/branchs'} component={Branchs} />
        <Route path={'/schedulesAndModalities'} component={SchedulesAndModalities} />
        <Route path={'/rates'} component={Rates} />
        <Route path={'/personalInfo'} component={PersonalInfo} />
        <Route path={'/direcction'} component={Direcction} />
        <Route path={'/paidMethod'} component={PaidMethod} />
        <Route path={'/webMagister'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
