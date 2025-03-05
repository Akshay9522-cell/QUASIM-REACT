import React from 'react'
import Child2 from './Child2'

const Child1 = ({name}) => {
  return (
    <div>
        <h1>child1:</h1>
      <Child2 name="akki" />
    </div>
  )
}

export default Child1
