import React from "react";
import {Switch, Route} from 'react-router-dom'

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