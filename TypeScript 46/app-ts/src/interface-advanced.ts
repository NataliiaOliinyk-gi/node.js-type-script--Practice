interface IRequest {
  method: string;
  url: string;
}

type LogRequestFun = (request: IRequest) => void;

const logRequest: LogRequestFun = (request: IRequest) => {
  console.log(`${request.method} ${request.url}`);
};

type Addres = {
  country: string;
  city: string;
  street: string;
  postaiCode: number;
};

interface IUser {
  name: string;
  lastName: string;
  readonly birthday: string;
  adress: Addres;
}

const user: IUser = {
  name: "Nata",
  lastName: "Oliinyk",
  birthday: "05.02.1977",
  adress: {
    country: "Germany",
    city: "Dessau",
    street: "Strasse",
    postaiCode: 12345,
  },
};
