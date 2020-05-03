import {Schema, Document} from "mongoose";

export const WorkflowStateSchema: Schema = new Schema({
    name: {
        type: String
    }
});

export interface WorkflowStateSchemaInterface extends Document {
    name: string
}