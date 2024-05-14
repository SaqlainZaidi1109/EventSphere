import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import { TbArrowLeftToArc } from "react-icons/tb";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function SignUpAsExhibitor() {
  return (
    <>
    <div className='h-svh content-center'>
   <div className='flex  justify-center gap-4'>
   <img class="hidden sm:block lg:h-96 md:h-96 lg:my-20 md:my-20 transition-all duration-300 rounded-md cursor-pointer filter grayscale hover:grayscale-0" src="./src/assets/exhibition.svg" alt="image description"/>
   <div className='h-96 md:w-2/4 sm:w-2/4  bg-gray-100 rounded-xl shadow-2xl my-20  lg:mr-5 md:mr-5  sm:mr-5'>
    <h1 className='font-Teachers text-center text-2xl p-5 shadow-md '>Exhibitor Sign-up</h1>
    <div className='flex justify-between ml-4 mr-6'>
    <h1 className='font-Teachers text-xl ml-2 p-3 '>Create an account:</h1>
    <img src="./src/assets/logo.png" className="h-10 m-2 ml-4 hover:rotate-180" alt="EventSphere_Logo" />
    </div>
    <form action="">
     <div className=''>
     <div className='flex justify-center'>   
     <input className='shadow-sm p-3 w-11/12 rounded-md' placeholder='Username'/>
     </div>  
     <div className='flex justify-center'>   
     <input className='shadow-sm p-3 w-11/12 mt-3 rounded-md' placeholder='Email'/>
     </div>  
     <div className='flex justify-center'>   
     <input className='shadow-sm p-3 w-11/12 mt-3 rounded-md' type='password' placeholder='Password'/>
     </div> 
     </div> 
     <div className='flex justify-between mr-9 gap-5 ml-9'>
     <button className="flex items-center mt-5 bg-white shadow-sm  text-black gap-1 px-4 py-2 cursor-pointer text-gray-800 font-Teachers tracking-widest rounded-md hover:bg-teal-400 hover:text-white duration-200 hover:gap-2 hover:translate-x-1">
       Sign Up
       <MdDoubleArrow />
      </button>
     <Link to='/signupas' className="flex items-center mt-5 bg-white shadow-sm  text-black gap-1 px-4 py-2 cursor-pointer text-gray-800 font-Teachers tracking-widest rounded-md hover:bg-teal-400 hover:text-white duration-200 hover:gap-2 hover:-translate-x-1">

     <FaAngleDoubleLeft />Go Back
        
      </Link>
     </div>
    </form>
   </div>    
   </div>

   </div>
   </>
  )
}
