import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insert, getAll, getById, update, deleteCar } from "../services/item.service"

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getById(id);
        res.send({car: response})
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send({cars: response})
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_GET_ITEMS')
    }
}

const updateItem = async ({ params: {id}, body }: Request, res: Response) => {
    try {
        const response = await update(id, body)
        res.send(response)
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_UPDATE_ITEM')
    }
}

const addItem = async ({ body } : Request, res: Response) => {
    try {
        const response = await insert(body)
        res.send(response)
    } catch (e) {
        res.status(500)
        handleHttp(res,'ERROR_ADD_ITEM', e)
    }
}

const deleteItem = async ({params:{id}}: Request, res: Response) => {
    try {
        const response = await deleteCar(id)
        res.send(response)
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