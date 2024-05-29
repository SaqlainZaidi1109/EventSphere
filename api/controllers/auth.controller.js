// import User from './models/user.models.js'
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

//next so we can use the middleware
export const signupOrganizer = async (req, res, next) => {
    console.log(req.body) //this to check in terminal
    //saving data in database
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required.'))
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

//Sign In Organizer
export const signinOrganizer = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required.'))
    }

    try {
        const validUser = await User.findOne({email});
        if (!validUser) {
            return next(errorHandler(404, 'User not found.'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password.'))
        }
        
        const token = jwt.sign( {id: validUser._id}, process.env.JWT_SECRET )
        res.status(200).cookie('access_token',token,{httpOnly:true}).json(validUser);
    } catch (error) {

    }
}