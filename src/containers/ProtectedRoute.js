import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import {loggedIn} from '../helpers/AuthHelpers'
import MainContainer from "./MainContainer";

const ProtectedRoute = ({token, children}) => {
    if(!token) return <Redirect to="/" replace /> 
    return children
}

export default ProtectedRoute