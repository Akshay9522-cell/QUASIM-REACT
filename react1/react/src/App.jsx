import React from 'react'
import { useRef } from 'react'
import Reducer from './components/Reducer'
import Card from './components/Card'
import New from './components/New'
import Reduce from './components/Reduce'

const App = () => {

  const myref=useRef("")

     const myVal=()=>{
      
        myref.current.style.fontSize="99px"
       
     }
     const myVal1=()=>{
    
       myref.current.style.backgroundColor="red"
       myref.current.style.border="10px solid black"
       
     
      
    }
    const myVal2=()=>{
     myref.current.style.borderRadius="20%"
      
    }
  return (
    <div>
      <Reduce/>
      <New/>
       <Card/>
      <Reducer/>
     
      <h1 ref={myref}>Welcome to cybrome</h1>
      <button onClick={myVal}>click</button>
      <button onClick={myVal1}>click</button>
      <button onClick={myVal2}>click</button>
    </div>
  )
}

export default App
