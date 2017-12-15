export class NotFoundException {
    constructor(message) {
        this._message = message;
    }

    get message() {
        return this._message;
    }
}