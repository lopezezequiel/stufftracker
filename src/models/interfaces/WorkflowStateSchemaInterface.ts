import {Schema, Document} from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";

export const WorkflowStateSchema: Schema = new Schema({
    id: {
        type: Schema.Types.ObjectId, //generar esto en el mapper
        require: true
    },
    name: {
        type: String,
        required: true
    }
});

export interface WorkflowStateSchemaInterface {
    id: Schema.Types.ObjectId,
    name: string
}