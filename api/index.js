import dotenv  from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => { console.log("Mongodb is connected") }).catch((err)=>{console.log(err)})

const app = express();
//as default we are not allowed to send json in the backend so we do this (to check in insomnia aswell):
app.use(express.json())
app.listen(3000, () => console.log('Server is running on port 3000!'))

// this was before making routes folder and userRoute, to test the route
// app.get('/test', (req,res)=>{
    //     res.json({message:"API is working!"})
    // });
    
// this is after making routes folder and userRoute, to test the route/api
app.use('/api/user',userRoutes) //here we used app.use not get because we are using get request in user.routes.js
app.use('/api/auth',authRoutes) 
