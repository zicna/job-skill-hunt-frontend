import React, { useState, useEffect } from 'react'

const SignOutForm = ({ setToken, user, setUser }) => {
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
        console.log(json)
        localStorage.clear()
        setToken(!!localStorage.token)
        setUser('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div>hello `{user.first_name}`</div>
      <button onClick={handleLogOut}>Sign me out</button>
    </div>
  )
}

export default SignOutForm
