import React from 'react'
import '../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
   <section>
    <div className='footer'>
    
      <ul className='list'>
         <li>PRODUCT</li>
        <li>Feature</li>
        <li>Service</li>
        <li>Enterprise</li>
        <li>Price</li>
      </ul>

      <ul  className='list'>
         <li>COMPANY</li>
        <li>Headless</li>
        <li>Commerce</li>
        <li>B2B Wholesale</li>
        <li>Career</li>
      </ul>

      <ul  className='list'>
         <li>HELP CENTER</li>
        <li>Community</li>
        <li>Knowledge Base</li>
        <li>Vedios</li>
        <li>Contact</li>
      </ul>
      <ul  className='list'>
         <li>PARTNER</li>
        <li>Overview</li>
        <li>Become a Partner</li>
        <li>Find a Partner</li>
        <li>Contact</li>
      </ul>
      <div  className='icon'>
    <FaFacebook />
    <FaXTwitter />
    <FaSquareInstagram />
    </div>
    </div>
   
    </section>
     
    </>
  )
}

export default Footer
