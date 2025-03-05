import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
 

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>

        <Route path='home' element={<Home/>}/>
        <Route path='sign' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>



        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
