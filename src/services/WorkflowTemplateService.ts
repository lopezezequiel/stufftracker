import WorkflowTemplateCreateInterface from "./interfaces/WorkflowTemplateCreateInterface";
import WorkflowTemplateInterface from "./interfaces/WorkflowTemplateInterface";
import { WorkflowTemplateSchemaInterface } from "../models/interfaces/WorkflowTemplateSchemaInterface";
import WorkflowTemplateModel from "../models/WorkflowTemplateModel";
import WorkflowTemplateSchemaMapper from "../mappers/WorkflowTemplateSchemaMapper";
import WorkflowTemplateUpdateInterface from "./interfaces/WorkflowTemplateUpdateInterface";

//TODO map objects
const create = async (input: WorkflowTemplateCreateInterface):Promise<WorkflowTemplateInterface> => {
    const workflowTemplate: WorkflowTemplateSchemaInterface = 
        await WorkflowTemplateModel.create(WorkflowTemplateSchemaMapper.fromWorkflowTemplateCreate(input));
    return WorkflowTemplateSchemaMapper.toWorkflowTemplate(workflowTemplate);
}

//return null or throw exception?
const findById = async (id: WorkflowTemplateSchemaInterface['_id']):Promise<WorkflowTemplateInterface> => {
    const workflowTemplate: WorkflowTemplateSchemaInterface = await WorkflowTemplateModel.findById(id).orFail().exec();
    return WorkflowTemplateSchemaMapper.toWorkflowTemplate(workflowTemplate);
}

//TODO add filter parameter
const findAll = async ():Promise<WorkflowTemplateInterface[]> => {
    const workflowTemplateArray: WorkflowTemplateSchemaInterface[] = await WorkflowTemplateModel.find().exec();
    return WorkflowTemplateSchemaMapper.toWorkflowTemplateArray(workflowTemplateArray);
}

const updateById = async (id: WorkflowTemplateSchemaInterface['_id'], input: WorkflowTemplateUpdateInterface):Promise<WorkflowTemplateInterface | null> => {
    const workflowTemplate: WorkflowTemplateSchemaInterface = await WorkflowTemplateModel.findByIdAndUpdate(id, input, {
        new: true
    }).orFail().exec();
    return WorkflowTemplateSchemaMapper.toWorkflowTemplate(workflowTemplate);
} 

const deleteById = async (id: WorkflowTemplateSchemaInterface['_id']):Promise<void> => {
    //TODO check types
    await WorkflowTemplateModel.findById(id).orFail();
    await WorkflowTemplateModel.deleteById(id);
} 

//keep declarations order
export default {
    create,
    findById,
    findAll,
    updateById,
    deleteById
}