import { model } from "mongoose";
import { WorkflowTransitionSchema, WorkflowTransitionSchemaInterface} from "./interfaces/WorkflowTransitionSchemaInterface";

export default model<WorkflowTransitionSchemaInterface>('WorkflowTransition', WorkflowTransitionSchema);