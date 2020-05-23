import GenericInterface from "./GenericInterface";
import { WorkflowTemplateSchemaInterface } from "../../models/interfaces/WorkflowTemplateSchemaInterface";

export default interface WorkflowTemplateInterface extends GenericInterface {
    name: WorkflowTemplateSchemaInterface['name'],
    states: WorkflowTemplateSchemaInterface['states'],
    transitions: WorkflowTemplateSchemaInterface['transitions']
}