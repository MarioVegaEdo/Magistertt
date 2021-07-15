import {Link, BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Branchs from '../Pages/Branchs'
import SchedulesAndModalities from '../Pages/SchedulesAndModalities'
import Rates from '../Pages/Rates'
import Direcction from '../Pages/Direcction'
import PaidMethod from '../Pages/PaidMethod'
import EndPage from '../Pages/EndPage'

function NavigationTree() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact strict path='/' >
                    <Home />
                </Route>
                
                    
                
            </Switch>
        </BrowserRouter>
    )

}

    
export default NavigationTree;