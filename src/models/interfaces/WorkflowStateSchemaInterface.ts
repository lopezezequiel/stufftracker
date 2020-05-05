import {Schema, Document} from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";

export const WorkflowStateSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    }
}, MongooseSchemaConfig);

WorkflowStateSchema.plugin(mongoose_delete, MongooseDeletePluginConfig);

export interface WorkflowStateSchemaInterface extends GenericSchemaInterface {
    name: string
}