import {Schema} from "mongoose";

export const WorkflowStateSchema: Schema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    initialState: {
        type: Boolean
    }
});

export interface WorkflowStateSchemaInterface {
    id: Schema.Types.ObjectId,
    name: string,
    initialState: boolean
}