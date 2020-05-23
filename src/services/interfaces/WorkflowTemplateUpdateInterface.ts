import { WorkflowTemplateSchemaInterface } from "../../models/interfaces/WorkflowTemplateSchemaInterface";

export default interface WorkflowTemplateUpdateInterface {
    name?: WorkflowTemplateSchemaInterface['name'],
    states?: WorkflowTemplateSchemaInterface['states'],
    transitions?: WorkflowTemplateSchemaInterface['transitions']
}