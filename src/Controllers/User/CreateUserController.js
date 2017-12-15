import User from './../../Models/User';

export class CreateUserController {

    /**
     * CreateUserController constructor
     * @param data
     */
    constructor(data) {
        this._data = data;
    }

    /**
     * Create new user
     * @returns {Promise<T>}
     */
    async createUser() {
        return User.create(this._data).then((created) => {
            return created;
        }).catch((errCreated) => {
            throw errCreated;
        });
    }
}