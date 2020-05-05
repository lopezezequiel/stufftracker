import ProductCategoryInterface from "./interfaces/ProductCategoryInterface";
import ProductCategoryCreateInterface from "./interfaces/ProductCategoryCreateInterface";
import ProductCategoryModel from "../models/ProductCategoryModel";
import { ProductCategorySchemaInterface } from "../models/interfaces/ProductCategorySchemaInterface";
import ProductCategoryUpdateInterface from "./interfaces/ProductCategoryUpdateInterface";
import ProductCategorySchemaMapper from "../mappers/ProductCategorySchemaMapper";

//TODO map objects
const create = async (input: ProductCategoryCreateInterface):Promise<ProductCategoryInterface> => {
    const productCategory: ProductCategorySchemaInterface = 
        await ProductCategoryModel.create(ProductCategorySchemaMapper.fromProductCategoryCreate(input));
    return ProductCategorySchemaMapper.toProductCategory(productCategory);
}

//return null or throw exception?
const findById = async (id: ProductCategorySchemaInterface['_id']):Promise<ProductCategoryInterface> => {
    const productCategory: ProductCategorySchemaInterface = await ProductCategoryModel.findById(id).orFail().exec();
    return ProductCategorySchemaMapper.toProductCategory(productCategory);
}

//TODO add filter parameter
const findAll = async ():Promise<ProductCategoryInterface[]> => {
    const productCategoryArray: ProductCategorySchemaInterface[] = await ProductCategoryModel.find().exec();
    return ProductCategorySchemaMapper.toProductCategoryArray(productCategoryArray);
}

const updateById = async (id: ProductCategorySchemaInterface['_id'], input: ProductCategoryUpdateInterface):Promise<ProductCategoryInterface | null> => {
    const productCategory: ProductCategorySchemaInterface = await ProductCategoryModel.findByIdAndUpdate(id, input, {
        new: true
    }).orFail().exec();
    return ProductCategorySchemaMapper.toProductCategory(productCategory);
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