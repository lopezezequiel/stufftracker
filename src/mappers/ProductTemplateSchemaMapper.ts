import ProductTemplateCreateInterface from "../services/interfaces/ProductTemplateCreateInterface";
import { ProductTemplateSchemaInterface } from "../models/interfaces/ProductTemplateSchemaInterface";

const fromProductTemplateCreate = (productTemplateCreate: ProductTemplateCreateInterface) => {
    return {
        code: productTemplateCreate.code,
        name: productTemplateCreate.name,
        categoryId: productTemplateCreate.categoryId,
        workflowTemplate: productTemplateCreate.workflowTemplate,
        productSchema: productTemplateCreate.productSchema
    }
}

const toProductTemplate = (productTemplateSchema: ProductTemplateSchemaInterface) => {
    return {
        id: productTemplateSchema._id,
        version: productTemplateSchema.__v,
        createdAt: productTemplateSchema.createdAt,
        updatedAt: productTemplateSchema.updatedAt,
        deletedAt: productTemplateSchema.deletedAt,
        code: productTemplateSchema.code,
        name: productTemplateSchema.name,
        categoryId: productTemplateSchema.categoryId,
        workflowTemplate: productTemplateSchema.workflowTemplate,
        productSchema: productTemplateSchema.productSchema
    }
}

export default {
    fromProductTemplateCreate,
    toProductTemplate
}