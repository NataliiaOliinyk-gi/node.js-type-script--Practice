import { Router } from "express";

import { authenticate, isAdmin } from "../middlewares/authorization.js";

import {
    getCategoriesController,
    addCategoryController,
    getCategoryByIdController,
    updateCategoryController,
    deleteCategoryController
} from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesController);
categoriesRouter.get("/:id", getCategoryByIdController);
categoriesRouter.post("/", authenticate, isAdmin, addCategoryController);
categoriesRouter.put("/:id", authenticate, isAdmin, updateCategoryController);
categoriesRouter.delete("/:id", authenticate, isAdmin, deleteCategoryController);

export default categoriesRouter;