import {model} from "mongoose";
import {WorkflowStateSchema, WorkflowStateSchemaInterface} from "./interfaces/WorkflowStateSchemaInterface";

export default model<WorkflowStateSchemaInterface>('WorkflowState', WorkflowStateSchema);