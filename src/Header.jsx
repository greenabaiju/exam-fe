import React from 'react'
import { Link } from 'react-router-dom'
Link
const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/allstud">All student</Link>
        
      </header>
    </div>
  )
}

export default Header
