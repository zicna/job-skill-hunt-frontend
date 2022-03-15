// import { render } from '@testing-library/react'
import React, { useState} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import SignOutForm from '../components/forms/SignOutForm'

const FormContainer = () => {
  const [token, setToken] = useState(!!localStorage.token)
  const [user, setUser] = useState("")

  const renderForms = () => {
    if (token) {
      return <SignOutForm setToken={setToken} user={user} setUser={setUser}/>
    } else {
      return <SignUpForm setToken={setToken} setUser={setUser} />
    }
  }

  return <div>{renderForms()}</div>
}

export default FormContainer
