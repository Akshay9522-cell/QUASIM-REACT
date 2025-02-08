import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {


    const Reducer=(state,action)=>{
        
        switch(action){
            case "increament":
                return state +1
            
             case "decreament":
             return state -1
                      
             default:
                return state.count
        }
    }

    const[count,dispatch]=useReducer(Reducer,0)
  return (
    <div>
      <h1 onClick={()=>{dispatch("increament")}}>Increament</h1>
      <h1>Count:{count}</h1>
      <h1 onClick={()=>{dispatch("decreament")}}>Decreament</h1>
    </div>
  )
}

export default Reducer
