import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerCtrl= async ({body}: Request, res: Response) =>{
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

const loginCtrl = async ({body}: Request, res: Response) => {
    const validateUser = await loginUser({...body})
    res.send(validateUser)
}

export { 
    registerCtrl,
    loginCtrl
}