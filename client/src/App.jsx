import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import SignUpAs from './pages/SignUpAs'
import SignUpAsOrganizer from './pages/SignUpAsOrganizer'
import SignUpAsAttendee from './pages/SignUpAsAttendee'
import SignUpAsExhibitor from './pages/SignUpAsExhibitor'
import SignInAsOrganizer from './pages/SignInAsOrganizer'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/signupas' element={<SignUpAs/>}/>
      <Route path='/signupasorganizer' element={<SignUpAsOrganizer/>}/>
      <Route path='/signupasattendee' element={<SignUpAsAttendee/>}/>
      <Route path='/signupasexhibitor' element={<SignUpAsExhibitor/>}/>
      <Route path='/signinasorganizer' element={<SignInAsOrganizer/>}/>
    </Routes>
    </BrowserRouter>
  )
}
