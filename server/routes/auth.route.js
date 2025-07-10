import express from 'express';
import { userSignUpHandler, userLoginHandler, userLogoutHandler, getUserHandler } from '../controllers/auth.controller.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', userSignUpHandler); // Endpoint for user signup

router.post('/login', userLoginHandler); // Endpoint for user login

router.post('/logout', userLogoutHandler); // Endpoint for user logout

router.get('/getUser', authenticateUser, getUserHandler); 

const authRouter = router;  
export default authRouter; // Exporting the authRouter for use in the index file