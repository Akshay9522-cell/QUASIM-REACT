
import { useState } from 'react'
import './App.css'
import Bg from './components/Bg'

function App() {


  const[a,setA]=useState({
      name:"akshay",
      skill:"full stack developer"
  })

  const[b,setB]=useState(["akki","21"])

  const[name,setName]=useState('')
  const[num,setNum]=useState(0)

 function decreament(){
     
     if(num>0){
        setNum(num-1)
     }
 }

  return (
    <>
    <Bg/>
    <h1>my name is {a.name} and my skill is {a.skill}</h1>

    <h1>my name is {b[0]} and my age is {b[1]}</h1>
    
     <h1>my name is:{name}</h1>
     <button onClick={()=>{setName("akshay")}}>click</button>

     <button onClick={()=>{setNum(num+1)}}>increament</button>
     <h1>{num}</h1>
     <button onClick={decreament}  >dicreament</button>



    </>
  )
}

export default App
