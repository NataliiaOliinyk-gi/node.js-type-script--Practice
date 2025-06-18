import Category from "../db/Category.js";

export const getCategories = () => Category.findAll();

export const addCategory = payload => Category.create(payload);

export const getCategoryById = async id => {
    const result = await Category.findByPk(id);
    if (!result) return null;
    return result
};

export const updateCategory = async (id, payload) => {
    const result = await Category.findByPk(id);
    if (!result) return null;
    await result.update(payload);
    return result;
};

export const deleteCategory = async id => {
    const result = await Category.findByPk(id);
    if (!result) return null;
    await result.destroy();
    return result;
};