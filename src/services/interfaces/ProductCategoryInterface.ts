import { ProductCategorySchemaInterface } from "../../models/interfaces/ProductCategorySchemaInterface";

export default interface ProductCategoryInterface {
    name: ProductCategorySchemaInterface['_id'],
    workflowTemplate: ProductCategorySchemaInterface['workflowTemplate'],
    parent: ProductCategorySchemaInterface['parent']
}