export type Book = {
  name: string;
  year: Date;
  description?: string;
};

const createBook = (name: string, year: Date, description?: string): Book => {
  return {
    name,
    year,
    description,
  };
};

export default createBook;