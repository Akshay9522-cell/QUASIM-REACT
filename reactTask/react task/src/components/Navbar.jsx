import React from 'react'
import '../App.css'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import image from '/src/images/bg.jpg'
import image1 from '/src/images/hero-pic.jpg'
import card1 from '/src/images/card1.jpg'

const Navbar = () => {
  return (
    <>
      <nav className='hero'>
        <h1>LOGO</h1>
        
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Facility</li>
                <li>Contact</li>
                <li><FaUser /></li>
                <li><FaSearch /></li>
            </ul>
           <img src={image}/>
        </nav>

        <section className='hero1'>
            <div>
            <h1>We have a awesome products <br />    all around  the world.</h1>

            <h1>VISIT AT ONCE!!!</h1>
            </div>    
            <img src={image1} alt="" />
        </section>

        <section className='card'>
          
          <div>
            <img src={card1} />
            <h1>Necklace</h1>
            <p>A symbol of Peace</p>
            <button>BUY IT</button>
          </div>
          <div>
            <img src={card1} />
            <h1>Necklace</h1>
            <p>A symbol of Peace</p>
            <button>BUY IT</button>
          </div>
          <div>
            <img src={card1} />
            <h1>Necklace</h1>
            <p>A symbol of Peace</p>
            <button>BUY IT</button>
          </div>
        </section>
    </>
  )
}

export default Navbar
