import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpAs() {
  return (
    <>
    <div className='h-96 content-center'>
     <div className='flex flex-col sm:flex-row sm:justify-center justify-center items-center gap-4'>
      <h1 className='font-Teachers text-2xl'>Sign-up as:</h1>
      <Button.Group outline>
        <Button color="gray"><Link to='/signupasorganizer'>Organizer</Link></Button>
        <Button color="gray"><Link to='/signupasexhibitor'>Exhibitor</Link></Button>
        <Button color="gray"><Link to='/signupasattendee'>Attendee</Link></Button>
      </Button.Group>
      <h1 className='font-Teachers text-2xl'>or</h1>
      <Button outline gradientDuoTone="cyanToBlue">
        <Link to='/sign-in'>Sign In</Link>
      </Button>
      </div>
      </div> 
    </>
  )
}
