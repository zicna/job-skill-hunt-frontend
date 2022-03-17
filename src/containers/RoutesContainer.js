import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'

import {loggedIn} from '../helpers/AuthHelpers'


import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Legacy from '../pages/Legacy'
import AboutClass from '../pages/AboutClass'


const RoutesContainer = () => {
return (
    <Switch>
        <Route exact path="/">
            {loggedIn ? <Redirect to="/about" /> : <Home />}
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={(routerProps) => <AboutClass {...routerProps} />} />
        <Route exact path="/contact" render={(renderProps)=><Contact {...renderProps} />} />
        <Route exact path="/legacy" children={({match})=> (<Legacy {...match}/>)} />
    </Switch>
)
}

export default RoutesContainer

{/* <Route exact path="/">
    <Home/>
</Route>
<Route exact path="/about" component={About} />
<Route exact path="/about" component={(routerProps) => <AboutClass {...routerProps} />} />
<Route exact path="/contact" render={(renderProps)=><Contact {...renderProps} />} />
<Route exact path="/legacy" children={({match})=> (<Legacy {...match}/>)} /> */}