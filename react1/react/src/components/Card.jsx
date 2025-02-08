// import React from 'react'
// // import myrotti from '/public/images/images.jpg'
// import '../App.css'

// const Card = () => {
//   return (
//     <>
//      <div className='card'>
//         <img src={myrotti} />
//         <h4>ROTWEILLER</h4>
//         <p>World's second largest dangerous and aggressive dog</p>
//         <button>BUY</button>
//      </div>
//     </>
//   )
// }

// export default Card

import React from 'react'
import { useReducer } from 'react'

const Card = () => {

const myChange=(state,action)=>{
     switch(action){
        case "red":
            return state="red"
            case "green":
                return state="green" 
                case "blue":
                    return state="blue"
                    case "orange":
                        return state="orange"   
     }
}


const[mycolr,mydis]=useReducer(myChange,'pink')
  return (
    <div>
        <button onClick={()=>{mydis("red")}}>red</button>
        <button onClick={()=>{mydis("green")}}>green</button>
        <button onClick={()=>{mydis("blue")}}>blue</button>
        <button onClick={()=>{mydis("orange")}}>orange</button>
      <h1 style={{color:mycolr}}>akshay</h1>
    </div>
  )
}

export default Card
