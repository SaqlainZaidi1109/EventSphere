import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import SignUpAs from './pages/SignUpAs'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUpAs/>}/>
    </Routes>
    </BrowserRouter>
  )
}
