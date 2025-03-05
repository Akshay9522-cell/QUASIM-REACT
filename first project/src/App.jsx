
import './App.css'
import Child from './Child'
import Child1 from './components/Child1'

function App() {

  let name="akki"
  return (
  <>
  <h1>Good morning name:{name}</h1>
  <Child1  name="akki" />
  <Child name={"akshay"} age={22} city={"Banglore"}/>

  </>
  )
}

export default App
