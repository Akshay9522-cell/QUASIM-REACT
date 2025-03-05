import React from 'react'
import {Link} from 're'

const Navbar = () => {
  return (
    <div>

        <nav>
            <h1>logo</h1>
            <ul>
                <li><Link to='home'>HOme</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
