import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">JobBoard</Link>
      </div>
      <ul className='navbar-links'>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/post-job">Post a Job</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar