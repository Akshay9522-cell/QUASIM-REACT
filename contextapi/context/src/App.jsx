
import './App.css'
import Child1 from './Child1'
import { createContext } from 'react'
import Child4 from './Child4'

let cdata=createContext()
let cdata1=createContext()
let obj={head:"shreee",age:5}
// let name="akshay"
let last="namdev"
function App() {

  

  return (
    <>
   <cdata.Provider value={obj}>
    <Child1/>
    
    </cdata.Provider>

{/* <cdata1.Provider value={last}>
    <Child4/>
    
    </cdata1.Provider> */}

     {/* for solve props driilling we use CONTEXT API  */}
    </>
  )
}

export default App
export {cdata,cdata1}
