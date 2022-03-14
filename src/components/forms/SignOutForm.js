import React, { useState, useEffect } from 'react'

const SignOutForm = () => {

  const handleLogOut = () => {
    fetch('http://localhost:3001/logout', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then((json) => Promise.reject(json))
        }
      })
      .then((json) => {
        //   debugger
        console.log(json)
        localStorage.clear()
      })
      .catch((err) => {
          debugger
          console.log(err)
        })
  }

  return (
    <div>
      <button onClick={handleLogOut}>Sign me out</button>
    </div>
  )
}

export default SignOutForm
