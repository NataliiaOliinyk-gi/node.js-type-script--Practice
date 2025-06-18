import * as categoriesService from "../services/categories.service.js"

import validateBody from "../utils/validateBody.js";
import HttpExeption from "../utils/HttpExeption.js";
import {
    categoryAddSchema,
    categoryUpdateSchema
} from "../validation/category.schema.js";


export const getCategoriesController = async (req, res) => {
    const result = await categoriesService.getCategories();

    res.json(result);
};

export const getCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await categoriesService.getCategoryById(id);
    if (!result) throw HttpExeption(404, `Category with id=${id} not found`);

    res.json(result);
};

export const addCategoryController = async (req, res) => {
    await validateBody(categoryAddSchema, req.body);
    const result = await categoriesService.addCategory(req.body);

    res.status(201).json(result);
};

export const updateCategoryController = async (req, res) => {
    await validateBody(categoryUpdateSchema, req.body);

    const { id } = req.params;
    const result = await categoriesService.updateCategory(id, req.body);
    if (!result) throw HttpExeption(404, `Category with id=${id} not found`);

    res.json(result);
}

export const deleteCategoryController = async (req, res) => {
    const { id } = req.params;
    const result = await categoriesService.deleteCategory(id);
    if (!result) throw HttpExeption(404, `Category with id=${id} not found`);

    res.json(result);
}