import React, { useState } from 'react'
import { Alert, Card, Label, TextInput } from "flowbite-react";
import { MdDoubleArrow } from "react-icons/md";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function SignUpAsOrganizer() {

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading]=useState(false)
  const handleChange =(e)=>{
    // console.log(e.target.value)
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.password || !formData.email){
      return setErrorMessage('Please fill out all the fields.')
    }
    try {
      const res = await fetch('api/auth/signupOrganizer',{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(formData)
      })

      const data = await res.json();
      if(data.sucess===false){
        return
      }
    } catch (error) {
      
    }
  }
 console.log(formData)
  return (
    <>
    <div className='h-svh content-center'>
    <div className='flex  justify-center'>
    <img className="hidden sm:block lg:h-2/4 md:h-96 lg:my-0 md:my-20 transition-all duration-300 rounded-md cursor-pointer filter grayscale hover:grayscale-0" src="./src/assets/register.svg" alt="image description"/>

    <div className='h-96 md:w-2/4 sm:w-2/4  bg-gray-100 rounded-xl shadow-2xl my-20  lg:mr-5 md:mr-5  sm:mr-5'>
     <h1 className='font-Teachers text-center text-2xl p-5 shadow-md '>Organizer Sign-up</h1>
     <div className='flex justify-between ml-4 mr-6'>
     <h1 className='font-Teachers text-xl ml-2 p-3 '>Create an account:</h1>
     <img src="./src/assets/logo.png" className="h-10 m-2 ml-4 hover:rotate-180" alt="EventSphere_Logo" />
     </div>
     <form action="" onSubmit={handleSubmit}>
      <div className=''>
      <div className='flex justify-center'>   
      <input className='shadow-sm p-3 w-11/12 rounded-md' type="text" id='username' placeholder='Username' onChange={handleChange}/>
      </div>  
      <div className='flex justify-center '>   
      <input className='shadow-sm p-3 w-11/12 mt-3 rounded-md' type="email" id='email' placeholder='Email' onChange={handleChange}/>
      </div>  
      <div className='flex justify-center'>   
      <input className='shadow-sm p-3 w-11/12 mt-3 rounded-md' type='password' id='password' placeholder='Password' onChange={handleChange}/>
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
     {/* <Link  ><div className='text-center font-Teachers mt-1'>Already have an account?</div></Link> */}
     </form>
    {
      errorMessage && (
        <Alert className='mt-5' color='failure'>
          {errorMessage}
        </Alert>
      )
    }  
    </div>  
    </div>

    </div>
    </>
  )
}
