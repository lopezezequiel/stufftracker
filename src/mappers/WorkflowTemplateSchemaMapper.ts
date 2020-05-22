import WorkflowTemplateCreateInterface from "../services/interfaces/WorkflowTemplateCreateInterface";
import WorkflowTemplateUpdateInterface from "../services/interfaces/WorkflowTemplateUpdateInterface";
import { WorkflowTemplateSchemaInterface } from "../models/interfaces/WorkflowTemplateSchemaInterface";
import WorkflowTemplateInterface from "../services/interfaces/WorkflowTemplateInterface";

const fromWorkflowTemplateCreate = (workflowTemplate: WorkflowTemplateCreateInterface) => {
    return {
        name: workflowTemplate.name
    }
}

const fromWorkflowTemplateUpdate = (workflowTemplate: WorkflowTemplateUpdateInterface) => {
    return {
        name: workflowTemplate.name
    }
}

const toWorkflowTemplate = (workflowTemplate: WorkflowTemplateSchemaInterface): WorkflowTemplateInterface => {
    return {
        id: workflowTemplate._id,
        version: workflowTemplate.__v,
        createdAt: workflowTemplate.createdAt,
        updatedAt: workflowTemplate.updatedAt,
        deletedAt: workflowTemplate.deletedAt,
        name:  workflowTemplate.name,
        initialState: workflowTemplate.initialState,
        states: workflowTemplate.states,
        transitions: workflowTemplate.transitions
    }
}


const toWorkflowTemplateArray = (workflowTemplate: WorkflowTemplateSchemaInterface[]): WorkflowTemplateInterface[] => {
    return workflowTemplate.map(toWorkflowTemplate);
}

export default {
    fromWorkflowTemplateCreate,
    fromWorkflowTemplateUpdate,
    toWorkflowTemplate,
    toWorkflowTemplateArray
}