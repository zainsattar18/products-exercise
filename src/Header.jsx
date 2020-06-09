import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="/" className="link-to">
      <div className="header"><h1>ProductsApp</h1></div>
      </Link>
    </div>
  )
}
export default Header