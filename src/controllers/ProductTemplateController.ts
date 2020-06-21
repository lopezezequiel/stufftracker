import express, { Router } from 'express';
import ProductTemplateCreateInterface from '../services/interfaces/ProductTemplateCreateInterface';
import ProductTemplateService from '../services/ProductTemplateService';

export default ():Router => {
    return express.Router()
        .post('/', async (request: express.Request, response: express.Response) => {
            const productTemplate: ProductTemplateCreateInterface = request.body;
            response.json(await ProductTemplateService.create(productTemplate));
        });
}