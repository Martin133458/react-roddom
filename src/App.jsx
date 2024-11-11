import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Contact from './pages/Contact'
import Header from './Components/Header/Header'
import Partner from './Components/Partners/Partner'

const App = () => {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Partner/>
    </>
  )
}

export default App
