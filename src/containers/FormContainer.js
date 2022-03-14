// import { render } from '@testing-library/react'
import React, {useState} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import SignOutForm from '../components/forms/SignOutForm'


export default function FormContainer() {


    const [a, setA ] = useState(()=> {
        return !!localStorage.token
    })

    const renderForms = () => {
        if (a){
            return < SignOutForm/>
        }else{
            return <SignUpForm />
        }
    }
    
  return (
    <div>{renderForms()}</div>
  )
}
