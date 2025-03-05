import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

      const[inp,setInp]=useState({})
      const[login,setLogin]=useState('')
      const nav=useNavigate()
      
       const handleInp=(e)=>{
           let name=e.target.name
           let value=e.target.value

           setInp(values=>({...values,[name]:value}))
       }
       useEffect(()=>{
          let data= JSON.parse(localStorage.getItem('info'))
          setLogin(data)

       },[])
       function logIn(){
          
          if(inp.email!=login.email){
              alert('no user found')

          } else if(inp.password!=login.password){
             alert('password is incorrect')
          } else{
            nav('/home')
          }
         
          console.log(inp)
       }

  return (
    <div>
      Email:<input type='email' name='email' onChange={handleInp} /> <br />
      Password:<input type='password' name='password' onChange={handleInp} /> <br />

      <button onClick={logIn}>Login</button>
    </div>
  )
}

export default Login
