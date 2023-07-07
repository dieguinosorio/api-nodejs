import { sign, verify } from "jsonwebtoken"

const { JWT_SECRET_ENV = 'secreto.01' } = process.env
const singToken = (id:string) => {
    const jwt = sign({id}, JWT_SECRET_ENV, {
        expiresIn: "2h",
    })
    return jwt;
}

const verifyToken = (jwt: string) => {
    return verify(jwt, JWT_SECRET_ENV)
}

export {
    singToken,
    verifyToken
}