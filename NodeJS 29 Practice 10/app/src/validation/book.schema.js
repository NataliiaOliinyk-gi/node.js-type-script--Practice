import * as Yup from "yup";

export const bookSchema = Yup.object({
    name: Yup.string().trim().required().min(2),
    description: Yup.string().trim().required().min(10),
    author: Yup.string().trim().required().min(2),
    year: Yup.string(),
    genre: Yup.string().required(),
});