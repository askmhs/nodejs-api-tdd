import User from './../../Models/User';
import {NotFoundException} from "../../Exceptions/NotFoundException";

export class RemoveUserController {

    /**
     * RemoveUserController constructor
     * @param userId
     */
    constructor(userId) {
        this._userId = userId;
    }

    /**
     * Remove user
     * @returns {Promise}
     */
    async removeUser() {
        return User.findByIdAndRemove(this._userId).then((removed) => {
            if (removed !== null) {
                return removed;
            } else {
                throw new NotFoundException("Couldn't find any user data!");
            }
        }).catch((errRemoved) => {
            throw errRemoved;
        });
    }
}