// import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import SignOutForm from '../components/forms/SignOutForm'

const FormContainer = () => {
  const [token, setToken] = useState(!!localStorage.token)

  const renderForms = () => {
    if (token) {
      return <SignOutForm setToken={setToken} />
    } else {
      return <SignUpForm setToken={setToken} />
    }
  }

  return <div>{renderForms()}</div>
}

export default FormContainer
