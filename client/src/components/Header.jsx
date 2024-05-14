import React, { useState } from 'react'
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };  //did this all in the button


  return (
    <>
    <header>
     <nav className='flex shadow-md text-center justify-between items-center p-0.5'>
        <div>
        <Link to="/" className="flex items-center  ">
                <img src="./src/assets/logo.png" className="h-10 m-2 ml-4" alt="EventSphere_Logo" />
                <span className='font-Teachers text-xl'>EventSphere</span>
        </Link>
        </div>
        
        <div className='flex font-Teachers space-x-4 hidden sm:flex'>
          <Link to='/' className='hover:uppercase hover:font-semibold  '>Home</Link>
          <Link to='about' className='hover:uppercase hover:font-semibold  '>About</Link>
          <Link to='' className='hover:uppercase  hover:font-semibold '>Exhibitions</Link>
        </div>

        <div className='flex'>
        <Link to='sign-in' className='flex space-x-1 mr-2 gap-3'>
        <Button gradientMonochrome="teal" className='' pill outline>Sign In</Button>
        </Link>
        <button className='sm:hidden' onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu className='h-10 '/></button></div>
     </nav>
     {!isOpen &&(
     <div className='pl-4 pt-3 pb-4 font-Teachers shadow-sm lg:hidden'>
          <Link to='/' className='block hover:uppercase hover:font-semibold  '>Home</Link>
          <Link to='about' className='block hover:uppercase hover:font-semibold  '>About</Link>
          <Link to='' className='block hover:uppercase  hover:font-semibold '>Exhibitions</Link>
     </div>)}
     </header>
    </>
  )
}
