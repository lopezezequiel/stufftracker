import ProductTemplateCreateInterface from "./interfaces/ProductTemplateCreateInterface";
import ProductTemplateInterface from "./interfaces/ProductTemplateInterface";
import { ProductTemplateSchemaInterface } from "../models/interfaces/ProductTemplateSchemaInterface";
import ProductTemplateModel from "../models/ProductTemplateModel";
import ProductTemplateSchemaMapper from "../mappers/ProductTemplateSchemaMapper";

const create = async (input: ProductTemplateCreateInterface):Promise<ProductTemplateInterface> => {
    const productTemplate: ProductTemplateSchemaInterface = await ProductTemplateModel.create(
        ProductTemplateSchemaMapper.fromProductTemplateCreate(input)
    );

    return ProductTemplateSchemaMapper.toProductTemplate(productTemplate);
}


export default {
    create
}