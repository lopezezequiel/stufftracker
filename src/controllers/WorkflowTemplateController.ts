import express, { Router } from "express";
import WorkflowTemplateService from "../services/WorkflowTemplateService";
import WorkflowTemplateCreateInterface from "../services/interfaces/WorkflowTemplateCreateInterface";
import WorkflowTemplateUpdateInterface from "../services/interfaces/WorkflowTemplateUpdateInterface";

export default ():Router => {
    return express.Router()
        .get('/', async (request: express.Request, response: express.Response) => {
            response.json(await WorkflowTemplateService.findAll());
        })
        .post('/', async (request: express.Request, response: express.Response) => {
            const workflowTemplate: WorkflowTemplateCreateInterface = request.body;
            response.json(await WorkflowTemplateService.create(workflowTemplate));
        })
        .get('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            response.json(await WorkflowTemplateService.findById(id));
        })
        .patch('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            const workflowTemplate: WorkflowTemplateUpdateInterface = request.body;
            response.json(await WorkflowTemplateService.updateById(id, workflowTemplate));
        })
        .delete('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            response.json(await WorkflowTemplateService.deleteById(id));
        })
}