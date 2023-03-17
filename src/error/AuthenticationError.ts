export class AuthenticationError extends Error {
    constructor(msg: string,private status: number) {
        super(msg);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }

    getErrorMessage(): string {
        return `Code ${this.status}: ${this.message}`;
    }
}