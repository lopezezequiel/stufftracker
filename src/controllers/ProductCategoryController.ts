import express, { Router } from 'express';
import ProductCategoryService from '../services/ProductCategoryService';
import ProductCategoryCreateInterface from '../services/interfaces/ProductCategoryCreateInterface';
import ProductCategoryUpdateInterface from '../services/interfaces/ProductCategoryUpdateInterface';

export default ():Router => {
    return express.Router()
        .get('/', async (request: express.Request, response: express.Response) => {
            response.json(await ProductCategoryService.findAll());
        })
        .post('/', async (request: express.Request, response: express.Response) => {
            const productCategory: ProductCategoryCreateInterface = request.body;
            response.json(await ProductCategoryService.create(productCategory));
        })
        .get('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            response.json(await ProductCategoryService.findById(id));
        })
        .patch('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            const productCategory: ProductCategoryUpdateInterface = request.body;
            response.json(await ProductCategoryService.updateById(id, productCategory));
        })
        .delete('/:id', async (request: express.Request, response: express.Response) => {
            const id: string = request.params.id;
            response.json(await ProductCategoryService.deleteById(id));
        })
}