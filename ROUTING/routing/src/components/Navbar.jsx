import './Navbar.css'
import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <nav className='nav'>
            <h1>logo</h1>
            <ul>
                <li><Link to='home'>HOme</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
