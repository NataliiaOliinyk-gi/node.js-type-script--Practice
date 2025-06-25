import * as bookServices from "../services/book.services.js";

import validateBody from "../utils/validateBody.js";
import { bookSchema } from "../validation/book.schema.js";

export const addBookController = async (req, res) => {
    await validateBody(bookSchema, req.body);

    const result = await bookServices.addBook({
        payload: req.body,
        file: req.file
    });

    res.status(201).json(result);
};
