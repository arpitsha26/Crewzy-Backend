import express from "express"
import { googleAuth, resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp } from "../controllers/auth.controllers.js"

const authRouter=express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",signIn)
authRouter.post("/google",googleAuth)
authRouter.post("/sendOtp",sendOtp)
authRouter.post("/verifyOtp",verifyOtp)
authRouter.post("/resetPassword",resetPassword)
authRouter.get("/signout",signOut)
export default authRouter