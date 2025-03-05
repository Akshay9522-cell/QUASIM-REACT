import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Signup = () => {

      const[inp,setInp]=useState({})
      const nav=useNavigate()
       
      const handleInp=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))
      }
       function signIn(){
          localStorage.setItem('info',JSON.stringify(inp))
          nav('/login')
          console.log(inp)
       }
  return (
    <div>
      Name:<input type='text' name='name' onChange={handleInp} /> <br />
      Email:<input type='email' name='email'  onChange={handleInp} /> <br />
      Password:<input type='password' name='password'  onChange={handleInp} /> <br />
 
      <button onClick={signIn}>Sign in</button>
    </div>
  )
}

export default Signup
