import React, { useState, useEffect } from 'react'

const SignOutForm = ({ conditionalRender }) => {
  console.log(conditionalRender)
  const [signOut, setSignOut] = useState(false)

  return (
    <div>
      <button onClick={() => conditionalRender()}>Sign me out</button>
    </div>
  )
}

export default SignOutForm
