import Genre from "../db/Genre.js"

export const getGenres = () => Genre.findAll();

// export const getGenreById = async id => {
//     const result = await Genre.findByPk(id);
//     if (!result) return null;
//     return result
// };

export const getGenreById = (id) => Genre.findByPk(id);

export const addGenre = (payload) => Genre.create(payload);

export const updateGenre = async(id, payload)=>{
    const result = await Genre.findByPk(id);
    if(!result) return null;

    await result.update(payload);
    return result;
};