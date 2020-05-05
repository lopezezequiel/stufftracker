import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Http404NotFoundException from "../exceptions/Http404NotFoundException";
import Http400BadRequestException from "../exceptions/Http404BadRequestException";
import Http500InternalServerErrorException from "../exceptions/Http500InternalServerErrorException";
import Http409ConflictException from "../exceptions/Http409ConflictException";
import Http422UnprocessableEntity from "../exceptions/Http422UnprocessableEntityException";

const MongooseExceptionHandlerMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {

    switch(true) {
 
        //Mongoose errors
        //invalid _id
        case error instanceof mongoose.Error.CastError && error.path === '_id':
            return next(new Http400BadRequestException('InvalidId', error.message));

        //document not found
        case error instanceof mongoose.Error.DocumentNotFoundError:
            return next(new Http404NotFoundException('DocumentNotFound', error.message));

        //validation error
        case error instanceof mongoose.Error.ValidationError:
            return next(new Http422UnprocessableEntity('ValidationError', error.message));

        //default mongoose error
        case error instanceof mongoose.Error:
            return next(new Http500InternalServerErrorException(null, error.message));
        
        //Mongo errors
        //duplicated keys
        case error instanceof mongoose.mongo.MongoError && error.code === 11000:
            return next(new Http409ConflictException('DuplicatedKeys', error.errmsg));
 
        //default mongo error
        case error instanceof mongoose.mongo.MongoError:
            return next(new Http500InternalServerErrorException(null, error.errmsg));
    }

    next();
}

export default MongooseExceptionHandlerMiddleware;