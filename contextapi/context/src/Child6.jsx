import React, { useContext } from 'react'
import { cdata } from './App'

const Child6 = () => {
    let data=useContext(cdata)
    let {head,age}=data

  return (
    <div>
      <h1>my name is= {head} and {age}</h1>
      <p></p>
    </div>
  )
}

export default Child6
