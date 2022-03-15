import React from "react";
import {Switch, Route} from 'react-router-dom'


import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Legacy from '../pages/Legacy'


const RoutesContainer = () => {
return (
    <Switch>
        <Route exact path="/" component={<Home/>} />
        <Route exact path="/about" component={<About/>} />
        <Route exact path="/contact" component={<Contact/>} />
        <Route exact path="/legacy" component={<Legacy/>} />
    </Switch>
)
}

export default RoutesContainer