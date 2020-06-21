import { ProductTemplateSchemaInterface } from "../../models/interfaces/ProductTemplateSchemaInterface";
import GenericInterface from "./GenericInterface";

export default interface ProductTemplateInterface extends GenericInterface {
    code: ProductTemplateSchemaInterface['code'],
    name: ProductTemplateSchemaInterface['name'],
    categoryId: ProductTemplateSchemaInterface['categoryId'],
    workflowTemplate: ProductTemplateSchemaInterface['workflowTemplate'],
    productSchema: ProductTemplateSchemaInterface['productSchema']
}