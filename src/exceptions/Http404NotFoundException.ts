import HttpGenericException from "./HttpGenericException";

class Http404NotFoundException extends HttpGenericException {
    constructor(code: string | null, message: string | null) {
        super(404, code || 'Http404', message || 'Http 404 - NotFound');
    }
}

export default Http404NotFoundException;