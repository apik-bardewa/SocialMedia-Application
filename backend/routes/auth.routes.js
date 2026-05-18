import express from 'express';
// const app = express();
// app.use(express.json());
import { otpValidation, resetPass, sendOtp, signIn, signOut, signUp} from '../controller/auth.controller.js';

const authRouter = express.Router();

authRouter.post("/signup",signUp);  //signup-route
authRouter.post("/signin",signIn);  //signin route
authRouter.get("/signout",signOut); //signout route
authRouter.post("/send-otp",sendOtp);
authRouter.post("/valid-otp",otpValidation);
authRouter.post("/reset-password",resetPass);


export default authRouter;