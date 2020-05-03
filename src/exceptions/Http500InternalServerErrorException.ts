import HttpGenericException from "./HttpGenericException";

class Http500InternalServerErrorException extends HttpGenericException {
    constructor(code: string | null, message: string | null) {
        super(500, code || 'Http500', message || 'Http500 - Internal Server Error');
    }
}

export default Http500InternalServerErrorException;