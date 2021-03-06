import User from './../../Models/User';
import {NotFoundException} from "../../Exceptions/NotFoundException";

export class UpdateUserController {

    /**
     * UpdateUserController constructor
     * @param userId
     * @param data
     */
    constructor(userId, data) {
        this._userId = userId;
        this._data = data;
    }

    /**
     * Update user
     * @returns {Promise}
     */
    async updateUser() {
        return User.findByIdAndUpdate(this._userId, {
            $set: this._data
        }, {
            new: true
        }).then((updated) => {
            if (updated !== null) {
                return updated;
            } else {
                throw new NotFoundException("Couldn't find any user data!");
            }
        }).catch((errUpdated) => {
            throw errUpdated;
        });
    }
}