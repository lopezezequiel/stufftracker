import { Schema } from "mongoose";
import { WorkflowTemplateSchemaInterface } from "./WorkflowTemplateSchemaInterface";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";

export const ProductCategorySchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    workflowTemplate: {
        type: Schema.Types.ObjectId,
        ref: "WorkflowTemplate"
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "ProductCategory"
    }
}, MongooseSchemaConfig);

//add soft-delete
ProductCategorySchema.plugin(mongoose_delete, MongooseDeletePluginConfig);


export interface ProductCategorySchemaInterface extends  GenericSchemaInterface {   
    name: string,
    workflowTemplate: WorkflowTemplateSchemaInterface['_id'],
    parent: ProductCategorySchemaInterface['_id']    
}
