import {CreateUserController} from "../Controllers/User/CreateUserController";
import InternalServerErrorResponse from "../Responses/InternalServerErrorResponse";
import SuccessResponse from "../Responses/SuccessResponse";

module.exports = (server) => {

    /**
     * Create new user route
     */
    server.post('/user/create', async (req, res) => {
        try {
            const result = await new CreateUserController(req.body).createUser();

            SuccessResponse(res, "Successfully create new user!", result);
        } catch (exception) {
            InternalServerErrorResponse(res, exception.message);
        }
    });
};