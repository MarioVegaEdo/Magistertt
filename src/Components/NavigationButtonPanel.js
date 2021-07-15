import React,{useEffect, useState} from 'react'
import {Redirect,Link, BrowserRouter, Route,Switch} from 'react-router-dom'
import NavigationTree from './NavigationTree'


const NavigationButtonPanel = (props) => {

    const [forwardPath, setForwardPath] = useState({});
    const [backPath, setBackPath] = useState({});
    const back = props.back

    return(
        <div>
            
            <BrowserRouter>
            <Link to="/branchs" >forwardPath</Link>
        </BrowserRouter>
        </div>
        
    )
}

export default NavigationButtonPanel
{/*<BrowserRouter>
                <div>
                    <div>
                        <Link to="" >forwardPath</Link>
                    </div>
                {typeof back !== 'undefined' || back !== '' || back !== 'none'  (
                    <div>
                        <Link to="" >backPath</Link>
                    </div>
                )
                }
                 </div>
                 <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/branchs">
                        <Branchs />
                    </Route>
                    <Route path="/schedulesAndModalities">
                        <SchedulesAndModalities />
                    </Route>
                    <Route path="/rates">
                        <Rates />
                    </Route>
                    <Route path="/personalInfo">
                        <personalInfo />
                    </Route>
                    <Route path="/direction">
                        <Direcction />
                    </Route>
                    <Route path="/paidMethod">
                        <PaidMethod />
                    </Route>
                    <Route path="/endPage">
                        <EndPage />
                    </Route>
                </Switch>
                </BrowserRouter>
            */}