import { Router } from "express";

import { addAdminController, changeAdminPasswordController } from "../controllers/users.controller.js";

import { authenticate, isSuperAdmin } from "../middlewares/authorization.js";

const usersRouter = Router();

usersRouter.post("/admins", authenticate, isSuperAdmin, addAdminController);

usersRouter.put("/admins/:id/password", authenticate, isSuperAdmin, changeAdminPasswordController)

export default usersRouter;