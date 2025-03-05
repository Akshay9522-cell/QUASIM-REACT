import React, { useState } from 'react'

const Bg = () => {
     
    const[bg,setBg]=useState('')
    const[hide,setHide]=useState(true)
    const[msg,setMsg]=useState()




 
  return (
    <div style={{backgroundColor:bg,height:"100vh"}}>
      <button onClick={()=>setBg('red')}>red</button>
      <button onClick={()=>setBg('black')}>black</button>
      <button onClick={()=>{setBg('orange')}}>orange</button>
      <button onClick={()=>{setBg('yellow')}}>yellow</button>
      <button onClick={()=>{setBg('green')}}>green</button>


    {hide?  <h1>HIDE ME</h1>:""}
     
      {/* <button onClick={()=>{setHide(false)}}>hide</button>
      <button onClick={()=>{setHide(true)}}>show</button> */}
      <button onClick={()=>{setHide(!hide)}}> {hide?"hide":"show"}</button>

     


      <h1>{msg}</h1>
      <button onClick={()=>{setMsg()}}>show</button>
    </div>
  )
}

export default Bg
