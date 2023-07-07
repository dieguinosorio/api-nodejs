import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/general.interface";

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send(req.user)
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_GET_ITEMS')
    }
}

export {
    getItems
}