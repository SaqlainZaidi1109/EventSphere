// import User from './models/user.models.js'
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

//next so we can use the middleware
export const signupOrganizer = async (req, res, next)=>{
console.log(req.body) //this to check in terminal
//saving data in database
const {username, email, password} = req.body;
if(!username || !email || !password || username==='' || email==='' || password===''){
    next(errorHandler(400,'All fields are required.'))
}

const hashedPassword = bcryptjs.hashSync(password, 10);

const newUser = new User({
    username,
    email,
    password: hashedPassword
})

try {
    
    await newUser.save();
    res.json('Organizer Sign Up successful')
} catch (error) {
    next(error)
}
}

//we will use async since we are signing up the user it takes time, then we will send the response to the user