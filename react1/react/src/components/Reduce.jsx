import React from 'react'

import { useReducer } from 'react'

const Reduce = () => {

      const mychnage=(state,action)=>{
           
        switch(action){
            case "nick":
                return state='akki'

                case "age":
                    return state='34'
        }
      }

    const[mytext,mydis]=useReducer(mychnage,'akshay')
  return (
    <div> 
        <h1>info:{mytext}</h1>

        <button onClick={()=>{mydis("nick")}}>nickname</button>
        <button onClick={()=>{mydis("age")}}>age</button>
      
    </div>
  )
}

export default Reduce
