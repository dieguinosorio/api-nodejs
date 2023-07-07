import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { singToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name} : User)  => {
    const checkIs =  await UserModel.findOne({email});
    if (checkIs) return 'ALREADY_USER';
    const passEncrypt = await encrypt(password);
    return await UserModel.create({ email, password: passEncrypt , name});
}

const loginUser = async ({email, password } : Auth) => {
    const user =  await UserModel.findOne({email});
    if (!user) return 'USER_NOT_EXIST';
    if(!verified(password, user?.password)) return 'INCORRECT_PASSWORD';
    const token = singToken(user.email as string)
    return {
        token,
        user
    }
}

export {
    loginUser,
    registerNewUser
}