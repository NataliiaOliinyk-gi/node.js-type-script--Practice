import { Router } from "express";

import upload from "../middlewares/upload.js";
import { addBookController } from "../controllers/book.controller.js";

const booksRouter = Router();

booksRouter.post("/", upload.single("cover"), addBookController);

export default booksRouter;