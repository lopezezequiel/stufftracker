import { ProductCategorySchemaInterface } from "../../models/interfaces/ProductCategorySchemaInterface";
import GenericInterface from "./GenericInterface";

export default interface ProductCategoryInterface extends GenericInterface {
    name: ProductCategorySchemaInterface['name'],
    workflowTemplate: ProductCategorySchemaInterface['workflowTemplate'],
    parent: ProductCategorySchemaInterface['parent']
}