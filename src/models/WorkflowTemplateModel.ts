import { model } from "mongoose";
import { WorkflowTemplateSchemaInterface, WorkflowTemplateSchema } from "./interfaces/WorkflowTemplateSchemaInterface";

export default model<WorkflowTemplateSchemaInterface>('WorkflowTemplate', WorkflowTemplateSchema);