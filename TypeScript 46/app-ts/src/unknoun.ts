// const userName: any = 21;
// userName.split(" ");

const userAge: unknown = 39;
if (typeof userAge === "string") {
  userAge.split(" ");
}

interface IBook {
  title: string;
  author: string;
  deccription: string;
  releaseYear: number;
}

const sortBooksByReleaseYear = (books: unknown) => {
  if (books instanceof Array) {
    return [...books].sort(
      (a: IBook, b: IBook): number => a.releaseYear - b.releaseYear
    );
  }
  throw new Error("books must be array");
};

const books = [
  {
    title: "Dune",
    author: "Gerbert Frank",
    deccription: "",
    releaseYear: 1965,
  },
  {
    title: "Messia of Dune",
    author: "Gerbert Frank",
    deccription: "",
    releaseYear: 1972,
  },
];

console.log(sortBooksByReleaseYear(books));
// console.log(sortBooksByReleaseYear(""));

console.log(Array.isArray(books));
console.log(Array.isArray({}));

console.log(books instanceof Array);
console.log(userAge instanceof Array);

// type LocalStorageData = string | null;

// const data: LocalStorageData = localStorage.getItem("books");
// if(typeof data === "string") {
//     const myBooks = JSON.parse(data);
// };

try {
  const myBooks = JSON.parse("");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
