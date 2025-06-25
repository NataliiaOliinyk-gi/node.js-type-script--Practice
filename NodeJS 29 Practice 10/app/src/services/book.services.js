import path, { join } from "node:path";
import fs from "node:fs/promises";

import Book from "../db/Book.js";

const bookDir = path.resolve("public", "books");

export const addBook = async ({ payload, file }) => {

    const { path: oldPath, filename } = file;
    const newPath = path.join(bookDir, filename);

    await fs.rename(oldPath, newPath);

    const cover = path.join("public", "books", filename)

    return await Book.create({ ...payload, cover })

};