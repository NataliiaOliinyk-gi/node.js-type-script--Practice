import * as usersService from "../services/users.service.js"

import validateBody from "../utils/validateBody.js";
import HttpExeption from "../utils/HttpExeption.js";
import { adminAddSchema, adminChangePasswordSchema } from "../validation/users.schema.js";


export const addAdminController = async (req, res) => {

    await validateBody(adminAddSchema, req.body);
    const result = await usersService.addAdmin(req.body);

    res.status(201).json({
        message: `user with email ${result.email} added`
    });
};

export const changeAdminPasswordController = async (req, res) => {

    await validateBody(adminChangePasswordSchema, req.body);

    const { id } = req.params;
    const result = await usersService.changeAdminPassword(id, req.body);
    if (!result) throw HttpExeption(404, `Admin with id=${id} not found`);

    res.json({
        message: "Password change successfully"
    });
};