import {Schema} from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import { WorkflowStateSchemaInterface } from "./WorkflowStateSchemaInterface";

export const WorkflowTransitionSchema: Schema = new Schema({
    currentState: {
        type: Schema.Types.ObjectId,
        ref: "WorkflowState"
    },
    nextState: {
        type: Schema.Types.ObjectId,
        ref: "WorkflowState"
    }
    //TODO agregar rule
});

//add soft-delete
WorkflowTransitionSchema.plugin(mongoose_delete, MongooseDeletePluginConfig);

export interface WorkflowTransitionSchemaInterface extends GenericSchemaInterface {
    currentState: WorkflowStateSchemaInterface['_id'],
    nextState: WorkflowStateSchemaInterface['_id']
    //TODO agregar rule
}