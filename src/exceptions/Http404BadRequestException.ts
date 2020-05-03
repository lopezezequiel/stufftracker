import HttpGenericException from "./HttpGenericException";

class Http400BadRequestException extends HttpGenericException {
    constructor(code: string | null, message: string | null) {
        super(400, code || 'Http400', message || 'Http400 - Bad Request');
    }
}

export default Http400BadRequestException;