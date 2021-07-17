import './App.css';
import NavigationTree from './Components/NavigationTree'
import Index from './Pages/Index'
import Branchs from './Pages/Branchs'
import SchedulesAndModalities from './Pages/SchedulesAndModalities'
import Rates from './Pages/Rates'
import PersonalInfo from './Pages/PersonalInfo'
import Direction from './Pages/Direction'
import PaidMethod from './Pages/PaidMethod'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import EndPage from './Pages/EndPage';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path={['/index','/']} component={Index} />
        <Route path={'/branchs'} component={Branchs} />
        <Route path={'/schedulesAndModalities'} component={SchedulesAndModalities} />
        <Route path={'/rates'} component={Rates} />
        <Route path={'/personalInfo'} component={PersonalInfo} />
        <Route path={'/direction'} component={Direction} />
        <Route path={'/paidMethod'} component={PaidMethod} />
        <Route path={'/endPage'} component={EndPage} />
        <Route path={'/webMagister'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
           <Route path={'/conditionsMaterial'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
        <Route path={'/conditionsAl'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
        <Route path={'/dataPro'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
        <Route path={'/legalInfo'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
         <Route path={'/paidDetails'} component={() =>{
          window.location.href = 'https://web.magister.com'
          return null
        }}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
