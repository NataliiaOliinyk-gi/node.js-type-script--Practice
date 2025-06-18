import * as genreService from "../services/genre.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { genreAddSchema, genreUpdateSchema } from "../validation/genre.schema.js";

export const getGenresController = async (req, res) => {
    const result = await genreService.getGenres();
    res.json(result)
};

export const getGenreByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await genreService.getGenreById(id);
    if (!result) throw HttpExeption(404, `Genre with id=${id} not found`);

    res.json(result);
};

export const addGenreController = async (req, res) => {
    await validateBody(genreAddSchema, req.body);

    const result = await genreService.addGenre(req.body);
    res.status(201).json(result);
};

export const updateGenreByIdController = async (req, res) => {
    await validateBody(genreUpdateSchema, req.body);

    const {id} = req.params;
    const result = await genreService.updateGenre(id, req.body);
    if(!result) throw HttpExeption(404, `Genre with id=${id} not found`);

    res.json(result);
};