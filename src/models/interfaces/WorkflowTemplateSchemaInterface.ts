import { Schema } from "mongoose";
import { GenericSchemaInterface } from "./GenericSchemaInterface";
import { WorkflowStateSchemaInterface } from "./WorkflowStateSchemaInterface";
import { WorkflowTransitionSchemaInterface } from "./WorkflowTransitionSchemaInterface";

export const WorkflowTemplateSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    initialState: {
        type: Schema.Types.ObjectId,
        ref: "WorkflowState"
    },
    states: [
        {
            type: Schema.Types.ObjectId,
            ref: "WorkflowState"
        }
    ],
    transitions: [
        {
            type: Schema.Types.ObjectId,
            ref: "WorkflowTransition"
        }
    ]
});

export interface WorkflowTemplateSchemaInterface extends GenericSchemaInterface {
    name: string,
    initialState: WorkflowStateSchemaInterface['_id'],
    states: [WorkflowStateSchemaInterface['_id']],
    transitions: [WorkflowTransitionSchemaInterface['_id']]
}