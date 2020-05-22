import {Schema} from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import mongoose_delete from "mongoose-delete";
import MongooseDeletePluginConfig from "../../configs/MongooseDeletePluginConfig";
import { WorkflowStateSchemaInterface } from "./WorkflowStateSchemaInterface";
import MongooseSchemaConfig from "../../configs/MongooseSchemaConfig";

export const WorkflowTransitionSchema: Schema = new Schema({
    currentState: {
        type: Schema.Types.ObjectId
    },
    nextState: {
        type: Schema.Types.ObjectId
    }
    //TODO agregar rule
});

export interface WorkflowTransitionSchemaInterface {
    currentState: WorkflowStateSchemaInterface['id'],
    nextState: WorkflowStateSchemaInterface['id']
    //TODO agregar rule
}