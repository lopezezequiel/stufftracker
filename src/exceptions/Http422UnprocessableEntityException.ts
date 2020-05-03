import HttpGenericException from "./HttpGenericException";

class Http422UnprocessableEntity extends HttpGenericException {
    constructor(code: string | null, message: string | null) {
        super(422, code || 'Http422', message || 'Http422 - Unprocessable Entity');
    }
}

export default Http422UnprocessableEntity;