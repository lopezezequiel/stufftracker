import { Schema } from "mongoose";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import { ProductCategorySchemaInterface } from "./ProductCategorySchemaInterface";
import { WorkflowTemplateSchemaInterface, WorkflowTemplateSchema } from "./WorkflowTemplateSchemaInterface";

export const ProductTemplateSchema: Schema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "ProductCategory",
        required: true
    },
    workflowTemplate: WorkflowTemplateSchema,
    productSchema: {
        type: String,
        required: true
    }
}, MongooseSchemaConfig);

//add soft-delete
ProductTemplateSchema.plugin(mongoose_delete, MongooseDeletePluginConfig);


export interface ProductTemplateSchemaInterface extends  GenericSchemaInterface {   
    code: string,
    name: string,
    categoryId: ProductCategorySchemaInterface['_id'],
    workflowTemplate: WorkflowTemplateSchemaInterface,
    productSchema: Object
}
