import { Schema } from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import { WorkflowStateSchemaInterface, WorkflowStateSchema } from "./WorkflowStateSchemaInterface";
import { WorkflowTransitionSchemaInterface, WorkflowTransitionSchema } from "./WorkflowTransitionSchemaInterface";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";

export const WorkflowTemplateSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    states: [WorkflowStateSchema],
    transitions: [WorkflowTransitionSchema]
}, MongooseSchemaConfig);

//add soft-delete
WorkflowTemplateSchema.plugin(mongoose_delete, MongooseDeletePluginConfig);

export interface WorkflowTemplateSchemaInterface extends GenericSchemaInterface {
    name: string,
    states: WorkflowStateSchemaInterface[],
    transitions: WorkflowTransitionSchemaInterface[]
}