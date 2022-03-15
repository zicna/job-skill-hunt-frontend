import React from "react";
import {Switch, Route} from 'react-router-dom'


import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Legacy from '../pages/Legacy'
import AboutClass from '../pages/AboutClass'


const RoutesContainer = () => {
return (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={(routerProps) => <AboutClass {...routerProps} />} />
        <Route exact path="/contact" render={(renderProps)=><Contact {...renderProps} />} />
        <Route exact path="/legacy" children={({match})=> (<Legacy {...match}/>)} />
    </Switch>
)
}

export default RoutesContainer