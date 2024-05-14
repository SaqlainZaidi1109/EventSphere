import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <>
    <div className='h-96 content-center'>
     <div className='flex flex-col sm:flex-row sm:justify-center justify-center items-center gap-4'>
      <h1 className='font-Teachers text-2xl'>Sign-in as:</h1>
      <Button.Group outline>
        <Button color="gray">Organizer</Button>
        <Button color="gray">Exhibitor</Button>
        <Button color="gray">Attendee</Button>
      </Button.Group>
      <h1 className='font-Teachers text-2xl'>or</h1>
      <Button outline gradientDuoTone="cyanToBlue">
        <Link to='/signupas'>Sign Up</Link>
      </Button>
      </div>
      </div> 
    </>

  )
}
