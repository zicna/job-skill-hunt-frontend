// import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import SignUpForm from '../components/forms/SignUpForm'
import SignOutForm from '../components/forms/SignOutForm'


export default function FormContainer() {


    const [render, setRender ] = useState(()=> {
        return !!localStorage.token
    })

    const conditionalRender = () => {
        setRender(!render)
    }

    useEffect(() => {
        console.log("render")
    },[render])

    const renderForms = () => {
        if (render){
            return < SignOutForm props = {conditionalRender}/>
        }else{
            return <SignUpForm props = {conditionalRender}/>
        }
    }
    
  return (
    <div>{renderForms()}</div>
  )
}
