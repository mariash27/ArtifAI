import express from 'express'
import {registerUser, loginUser, userCredits, processPayment} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/payment', userAuth, processPayment);

export default userRouter

