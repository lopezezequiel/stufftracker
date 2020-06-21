import { ProductTemplateSchemaInterface } from "../../models/interfaces/ProductTemplateSchemaInterface";

export default interface ProductTemplateCreateInterface {
    code: ProductTemplateSchemaInterface['code'],
    name: ProductTemplateSchemaInterface['name'],
    categoryId: ProductTemplateSchemaInterface['categoryId'],
    workflowTemplate: ProductTemplateSchemaInterface['workflowTemplate'],
    productSchema: ProductTemplateSchemaInterface['productSchema']
}