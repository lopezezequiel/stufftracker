import { WorkflowTemplateSchemaInterface } from "../../models/interfaces/WorkflowTemplateSchemaInterface";

export default interface WorkflowTemplateCreateInterface {
    name: WorkflowTemplateSchemaInterface['name'],
    states: WorkflowTemplateSchemaInterface['states'],
    transitions: WorkflowTemplateSchemaInterface['transitions']
}