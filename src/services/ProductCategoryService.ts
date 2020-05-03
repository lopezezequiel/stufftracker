import ProductCategoryInterface from "./interfaces/ProductCategoryInterface";
import ProductCategoryCreateInterface from "./interfaces/ProductCategoryCreateInterface";
import ProductCategoryModel from "../models/ProductCategoryModel";
import { ProductCategorySchemaInterface } from "../models/interfaces/ProductCategorySchemaInterface";
import ProductCategoryUpdateInterface from "./interfaces/ProductCategoryUpdateInterface";

//TODO map objects



const create = async (productCategory: ProductCategoryCreateInterface):Promise<ProductCategoryInterface> => {
    return await ProductCategoryModel.create({});
}

//return null or throw exception?
const findById = async (id: ProductCategorySchemaInterface['_id']):Promise<ProductCategoryInterface | null> => {
    return await ProductCategoryModel.findById(id).orFail().exec();
}

//TODO add filter parameter
const findAll = async ():Promise<ProductCategoryInterface[]> => {
    return await ProductCategoryModel.find().exec();
}

const updateById = async (id: ProductCategorySchemaInterface['_id'], productCategory: ProductCategoryUpdateInterface):Promise<ProductCategoryInterface | null> => {
    return await ProductCategoryModel.findByIdAndUpdate(id, productCategory, {
        new: true
    }).orFail().exec();
} 

const deleteById = async (id: ProductCategorySchemaInterface['_id']):Promise<void> => {
    //TODO check types
    await ProductCategoryModel.findById(id).orFail();
    await ProductCategoryModel.deleteById(id);
} 

//keep declarations order
export default {
    create,
    findById,
    findAll,
    updateById,
    deleteById
}