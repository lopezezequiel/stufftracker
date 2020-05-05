import express, { Router, request } from "express";
import WorkflowStateService from "../services/WorkflowStateService";
import WorkflowStateCreateInterface from "../services/interfaces/WorkflowStateCreateInterface";
import WorkflowStateUpdateInterface from "../services/interfaces/WorkflowStateUpdateInterface";

export default ():Router => {
    return express.Router()
    .get('/', async (request: express.Request ,response: express.Response) => {
        response.json(await WorkflowStateService.findAll());
    })
    .get('/:id', async (request: express.Request, response: express.Response) => {
        const id: string = request.params.id;
        response.json(await WorkflowStateService.findById(id));
    })
    .post('/', async (request: express.Request, response: express.Response) => {
        const workflowState: WorkflowStateCreateInterface = request.body;
        response.json(await WorkflowStateService.create(workflowState));
    })
    .patch('/:id', async (request: express.Request, response: express.Response) => {
        const id: string = request.params.id;
        const workflowState: WorkflowStateUpdateInterface = request.body;
        response.json(await WorkflowStateService.updateById(id, workflowState));
    })
    .delete('/:id', async (request: express.Request, response: express.Response) => {
        const id: string = request.params.id;
        response.json(await WorkflowStateService.deleteById(id));
    })
}