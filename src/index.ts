//IMPORTANT: not move this from here
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import ProductCategoryController from './controllers/ProductCategoryController';
import mongoose from 'mongoose';
import DatabaseConfig from './configs/DatabaseConfig';


const app: express.Application = express();

app.use(express.json())
app.use('/api/product-categories', ProductCategoryController());

mongoose.connect(DatabaseConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});



app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});