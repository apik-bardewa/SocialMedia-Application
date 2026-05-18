import express from 'express';
import { editProfile, getcurrentUser, getProfile, suggestUser } from '../controller/user.controller.js';
import isAuth from '../middlewares/isAuth.js';
import { upload } from '../middlewares/Multer.js';

const userRouter = express.Router();

userRouter.get("/current",isAuth, getcurrentUser);
userRouter.get("/suggestUser",isAuth,suggestUser);
userRouter.get("/getProfile/:userName",isAuth, getProfile);
userRouter.post("/editProfile",isAuth,upload.single("profileImage") ,editProfile);


export default userRouter;