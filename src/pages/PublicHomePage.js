import React from 'react'
import {Link} from 'react-router-dom'

export default function PublicHomePage() {
  return (
    <>
      <h1>PublicHomePage</h1>
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                      <Link to="/signup">Sign Up</Link>
                  </li>
              </ul>
          </nav>
      </div>
    </>
  )
}
