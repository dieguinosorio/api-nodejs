import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/general.interface";
import { User } from "../interfaces/user.interface";

const checkJWt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const { authorization = null } = req.headers;
        const jwt = authorization?.split(' ').pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if(!isUser){
            res.status(401)
            res.send('INVALID_TOKEN')
        } else {
            req.user = isUser;
            next();
        }
    } catch (error) {
        res.status(400)
        res.send('SESSION_INVALID')
    }
}

export { 
    checkJWt
}