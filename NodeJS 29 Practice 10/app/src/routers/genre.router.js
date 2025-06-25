import { Router } from "express";

import { 
    getGenresController, 
    getGenreByIdController,
    addGenreController,
    updateGenreByIdController,
} from "../controllers/genre.controller.js";

const genreRouter = Router();

genreRouter.get("/", getGenresController);
genreRouter.get("/:id", getGenreByIdController);
genreRouter.post("/", addGenreController);
genreRouter.put("/:id", updateGenreByIdController);

export default genreRouter;