import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getOrders = async (): Promise<Car[]> => {
    const response = await ItemModel.find();
    return response as unknown as Car[];
}