import React from 'react'

const Child = ({name}) => {

    const person={
          name:"akki",
          age:24
    }
    const{name1}=person

  return (
    <div>
      <h1>hello:{name}</h1>
     
    </div>
  )
}

export default Child
