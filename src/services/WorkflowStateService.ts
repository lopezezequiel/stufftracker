import WorkflowStateCreateInterface from "./interfaces/WorkflowStateCreateInterface";
import WorkflowStateInterface from "./interfaces/WorkflowStateInterface";
import WorkflowStateModel from "../models/WorkflowStateModel";
import WorkflowStateUpdateInterface from "./interfaces/WorkflowStateUpdateInterface";
import { WorkflowStateSchemaInterface } from "../models/interfaces/WorkflowStateSchemaInterface";

const create = async (workflowState: WorkflowStateCreateInterface):Promise<WorkflowStateInterface> => {
    return await WorkflowStateModel.create(workflowState);
}

const findById = async (id: WorkflowStateSchemaInterface['_id']):Promise<WorkflowStateInterface | null> => {
    return await WorkflowStateModel.findById(id).orFail();
}

//TODO add filter parameter
const findAll = async ():Promise<WorkflowStateInterface[]> => {
    return await WorkflowStateModel.find().exec();
}

const updateById = async (id: WorkflowStateSchemaInterface['_id'], workflowState: WorkflowStateUpdateInterface):Promise<WorkflowStateInterface | null> => {
    return await WorkflowStateModel.findByIdAndUpdate(id, workflowState, {
        new: true
    }).orFail().exec();
}

const deleteById = async (id: WorkflowStateSchemaInterface['_id']):Promise<void> => {
    await WorkflowStateModel.findById(id).orFail()
    await WorkflowStateModel.deleteById(id); 
}

//keep declarations order
export default {
    create,
    findById,
    findAll,
    updateById,
    deleteById
}