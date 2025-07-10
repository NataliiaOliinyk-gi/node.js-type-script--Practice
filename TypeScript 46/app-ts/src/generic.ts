import axios from "axios";
import "./utils";

interface ICategory {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const getMSFFromISO = (iso: string) => new Date(iso).getTime();

const sortCategoriesByCreatedAt = (categories: ICategory[]) => {
  return [...categories].sort(
    (a, b) => getMSFFromISO(a.createdAt) - getMSFFromISO(b.createdAt)
  );
};

const sortByCreatedAt = <T extends { createdAt: string }>(array: T[]) => {
  return [...array].sort(
    (a, b) => getMSFFromISO(a.createdAt) - getMSFFromISO(b.createdAt)
  );
};

const myCategories: ICategory[] = [
  {
    _id: "685bd14aff4fc0b41715ad94",
    name: "Категория 55",
    description: "Описание категории 55",
    image: "categorie\\1750847818110_878037470_32044-1000x1000.jpg",
    createdAt: "2025-06-25T10:36:58.121+00:00",
    updatedAt: "2025-06-25T10:36:58.121+00:00",
  },
  {
    _id: "685bd241da498334601329e5",
    name: "Категория 56",
    description: "Описание категории 56",
    image: "categories\\1750848065496_274651121_32044-1000x1000.jpg",
    createdAt: "2025-05-25T10:41:05.512+00:00",
    updatedAt: "2025-05-25T10:41:05.512+00:00",
  },
];

console.log(sortByCreatedAt<ICategory>(myCategories));

const useState = <T>(state: T): [T, (newState: T) => void] => {
  const setState = (newState: T): void => {
    state = newState;
  };
  return [state, setState];
};

const [count, setCount] = useState<number>(1);
const [myUser, setMyUser] = useState<string>("Nata");

const sortByDate = <T>(array: T[], key: keyof T): T[] => {
  return [...array].sort(
    (a, b) => getMSFFromISO(a[key] as string) - getMSFFromISO(b[key] as string)
  );
};

console.log(sortByDate(myCategories, "createdAt"));

//

interface IResponce<T> {
  status: number;
  statusText: string;
  data: T[];
}

const fetchPosts = async (): Promise<IPost[]> => {
  const responce: IResponce<IPost> = await axios.get("");
  return responce.data;
};

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getSortPosts = async (): Promise<IPost[]> => {
  const data = await fetchPosts();
  const sortedPosts = sortByid<IPost>(data);
  return sortedPosts;
};

// console.log(getSortPosts());
