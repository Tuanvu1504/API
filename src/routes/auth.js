import { Router } from "express";
import { signIn, signUp } from "../controllers/auth";



const routerAuth = Router()


routerAuth.post('/signUp', signUp)
routerAuth.post('/signIn', signIn)


export default routerAuth
