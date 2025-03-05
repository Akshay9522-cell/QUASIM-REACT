
import { useEffect, useState } from 'react'
import './App.css'

function App() {
     
  const[clr,setClr]=useState('black')
  const[cnt,setCnt]=useState(0)

  useEffect(()=>{
    alert('hlw akshay namdev')
  },[cnt])
  
 function colorChange(){
      
      document.body.style='background:red;';

      let color=
 }

  return (
    <>
     <h1>{cnt}</h1>
     <button onClick={()=>{setCnt(cnt+1)}}>count</button>
     <h1 style={{color:clr}}>akshay</h1>
     <button onClick={()=>{setClr('cyan')}}>click</button>

     <button onClick={colorChange}>clrChange</button>
    </>
  )
}

export default App
