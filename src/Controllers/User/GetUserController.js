import User from './../../Models/User';
import {NotFoundException} from "../../Exceptions/NotFoundException";

export class GetUserController {

    /**
     * Get detail user
     * @param userId
     * @returns {Promise}
     */
    async detailUser(userId) {
        return User.findById(userId).select('-__v').lean().then((user) => {
            if (user !== null) {
                return user;
            } else {
                throw new NotFoundException("Couldn't find any user data!");
            }
        }).catch((errUser) => {
            throw errUser;
        });
    }

    /**
     * Get all user data
     * @returns {Promise}
     */
    async listUser() {
        return User.find().select('-__v').lean().then((result) => {
            return result;
        }).catch((errResult) => {
            throw errResult;
        });
    }
}