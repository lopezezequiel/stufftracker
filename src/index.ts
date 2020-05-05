//IMPORTANT: not move this from here
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

//patch express to support promise rejections
require('express-async-errors');

import ProductCategoryController from './controllers/ProductCategoryController';
import mongoose from 'mongoose';
import DatabaseConfig from './configs/DatabaseConfig';
import GlobalExceptionHandlerMiddleware from './middlewares/HttpExceptionHandlerMiddleware';
import MongooseExceptionHandlerMiddleware from './middlewares/MongooseExceptionHandlerMiddleware';
import HttpExceptionHandlerMiddleware from './middlewares/HttpExceptionHandlerMiddleware';
import WorkflowStateController from './controllers/WorkflowStateController';


const app: express.Application = express();


mongoose.connect(DatabaseConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


app.use(express.json())
app.use('/api/product-categories', ProductCategoryController());
app.use('/api/workflow-state', WorkflowStateController());
app.use(MongooseExceptionHandlerMiddleware);
app.use(HttpExceptionHandlerMiddleware);


app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});