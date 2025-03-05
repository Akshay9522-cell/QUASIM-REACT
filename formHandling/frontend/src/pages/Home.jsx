import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
     const nav=useNavigate()
    let data=JSON.parse(localStorage.getItem('info'))
     
    function logOut(){
          localStorage.clear()
          nav('/sign')

    }

  return (
    <div>
      <h4>Welcome:{data.name}</h4>
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Home
