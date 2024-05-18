// import User from './models/user.models.js'
import User from '../models/user.model.js'

export const signupOrganizer = async (req, res)=>{
console.log(req.body) //this to check in terminal
//saving data in database
const {username, email, password} = req.body;
if(!username || !email || !password || username==='' || email==='' || password===''){
    return res.status(400).json({message:"All fields are required"})
}

const newUser = new User({
    username,
    email,
    password
})

try {
    
    await newUser.save();
    res.json('Organizer Sign Up successful')
} catch (error) {
    res.status(500).json({message:error.message})
}
}

//we will use async since we are signing up the user it takes time, then we will send the response to the user