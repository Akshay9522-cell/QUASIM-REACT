
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbarr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'


function App() {
   const[use,setUse]=useState()
    const show=()=>{
    setUse("akshay")
    }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

   {/* <h1>{use}</h1>
   <button onClick={show}>click</button> */}
    </>
  )
}

export default App
