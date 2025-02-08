import React from 'react'
import { useReducer } from 'react'

const New = () => {

    const myChange=(state,action)=>{
        
        switch(action){

            case "age":
              return  state="24"

            case "DOB":
              return  state="25/07/2000"
                
            case "skill":
                 return state="MERN,JAVA,C++"    

             case "last":
                return state="Namdev"    
        } 
    }
    
    const[mytext,mydis]=useReducer(myChange,"INFO")
  return (
    <div>
       <h1>AKSHAY :{mytext}</h1>
       <button onClick={()=>{mydis("age")}}>age</button>
       <button onClick={()=>{mydis("DOB")}}>DOB</button>
       <button onClick={()=>{mydis("skill")}}>skill</button>
       <button onClick={()=>{mydis("last")}}>LAST name</button>
    </div>
  )
}

export default New
