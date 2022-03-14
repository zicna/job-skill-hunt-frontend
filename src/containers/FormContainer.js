// import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import SignOutForm from '../components/forms/SignOutForm'


const FormContainer = () => {


    const [render, setRender ] = useState(()=> {
        return !!localStorage.token
    })

    const renderForms = () => {
        if (render){
            return < SignOutForm />
        }else{
            return <SignUpForm />
        }
    }
    
  return (
    <div>{renderForms()}</div>
  )
}

export default FormContainer
