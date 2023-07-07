import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const insert = async (item: Car): Promise<Car[]> => {
    const response = await ItemModel.create(item);
    return response as unknown as Car[];
}

const getAll = async (): Promise<Car[]> => {
    const response = await ItemModel.find();
    return response as unknown as Car[];
}

const getById = async (id: string ): Promise<Car> => {
    const response = await ItemModel.findById(id);
    return response as unknown as Car;
}

const update = async (id:string, item: Car): Promise<Car[]> => {
    const response = await ItemModel.findByIdAndUpdate(id ,item, { new: true });
    return response as unknown as Car[];
}

const deleteCar = async (id:string): Promise<Car[]> => {
    const response = await ItemModel.findByIdAndRemove(id , { new: true });
    return response as unknown as Car[];
}

export { 
    insert,
    getAll,
    getById,
    update,
    deleteCar
}