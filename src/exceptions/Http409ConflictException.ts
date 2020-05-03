import HttpGenericException from "./HttpGenericException";

class Http409ConflictException extends HttpGenericException {
    constructor(code: string | null, message: string | null) {
        super(409, code || 'Http409', message || 'Http409 - Conflict');
    }
}

export default Http409ConflictException;