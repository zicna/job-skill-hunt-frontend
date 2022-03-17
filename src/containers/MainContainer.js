import React from 'react'
import NavBar from '../components/NavBar'

import FormContainer from './FormContainer'
import RoutesContainer from './RoutesContainer'

const MainContainer = () => {
  return (
    <div className="container">
      <NavBar />
      <FormContainer />
      <RoutesContainer />
    </div>
  )
}

export default MainContainer
