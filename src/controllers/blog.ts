import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        res.send('ok')
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_GET_ITEM')
    }
}

const getItems = (req: Request, res: Response) => {
    try {
        res.send('ok')
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_GET_ITEMS')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_UPDATE_ITEM')
    }
}

const addItem = ({ body } : Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_ADD_ITEM')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_DELETE_ITEM')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    addItem,
    deleteItem
}