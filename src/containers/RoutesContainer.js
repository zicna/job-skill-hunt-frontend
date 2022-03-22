import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { loggedIn } from '../helpers/AuthHelpers'

// import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Legacy from '../pages/Legacy'
import UserHomePage from '../pages/UserHomePage'
import PublicHomePage from '../pages/PublicHomePage'
import FormContainer from '../containers/FormContainer'

import ProtectedRoute from './ProtectedRoute'
import SignUpForm from '../components/forms/SignUpForm'

const RoutesContainer = () => {

  const [token, setToken] = useState(loggedIn())

  useEffect(()=> setToken(loggedIn()),[])

  return (
    <Switch>
      <Route exact path="/" component={(routerProps) => <PublicHomePage {...routerProps}/>}/>
      <Route
        exact
        path="/about"
        element={
          <ProtectedRoute token={token}>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/contact"
        element={
          <ProtectedRoute token={token}>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route exact path="/signup" component={(routerProps) => <SignUpForm {...routerProps} /> } />
        
    </Switch>
  )
}

export default RoutesContainer

{
  /* <Route exact path="/">
    <Home/>
</Route>
<Route exact path="/about" component={About} />
<Route exact path="/about" component={(routerProps) => <AboutClass {...routerProps} />} />
<Route exact path="/contact" render={(renderProps)=><Contact {...renderProps} />} />
<Route exact path="/legacy" children={({match})=> (<Legacy {...match}/>)} /> */
}
