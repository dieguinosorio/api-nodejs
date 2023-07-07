import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/general.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage.service";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log({user,file})
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };