import * as Yup from "yup";

export const genreAddSchema = Yup.object({
    name: Yup.string().trim().required(),
    description: Yup.string().trim().required(),
});

export const genreUpdateSchema = Yup.object({
    name: Yup.string().trim(),
    description: Yup.string().trim(),
}).noUnknown(true, "Unknown finds")