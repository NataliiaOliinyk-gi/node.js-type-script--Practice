import Genre from "../db/Genre.js"

export const getGenres = () => Genre.find();

export const getGenreById = (id) => Genre.findById(id);

export const addGenre = (payload) => Genre.create(payload);

export const updateGenre = async (id, payload) => Genre.findByIdAndUpdate(id, payload, { new: true });