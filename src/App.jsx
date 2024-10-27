import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
