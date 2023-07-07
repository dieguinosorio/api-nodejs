import { compare, hash } from "bcryptjs"

const encrypt = async(password: string) => {
    return await hash(password, 8);
}

const verified = async (password: string, passEncrypt: string) => {
    return await compare(password, passEncrypt);
}

export {
    encrypt,
    verified
}