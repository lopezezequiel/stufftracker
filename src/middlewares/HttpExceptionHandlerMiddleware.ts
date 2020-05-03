import { NextFunction, Request, Response } from "express";
import HttpGenericException from "../exceptions/HttpGenericException";

const HttpExceptionHandlerMiddleware = (error: any, request: Request, response: Response, next: NextFunction) => {

    console.log(error);

    switch(true) {
        //handle our http exceptions
        case error instanceof HttpGenericException: 
            response.status(error.status).json({
                status: error.status,
                code: error.code,
                message: error.message
            });

        //handle default error
        default: return response.status(500).json({
            status: 500,
            code: 'Http500',
            message: error.message
        });
    }
}

export default HttpExceptionHandlerMiddleware;