class HttpGenericException extends Error {
    code: string;
    message: string;
    status: number;

    constructor(status: number, code: string, message: string) {
        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

export default HttpGenericException;