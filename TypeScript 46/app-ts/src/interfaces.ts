import { Role } from "./types";

interface IUser {
  name: string;
  lastName: string;
}

interface IUser {
  role: Role;
}

// интерфейсы наследуется
interface IAdmin extends IUser {
  password: string;
}

const user: IUser = {
  name: "Nata",
  lastName: "Oliinyk",
  role: "user",
};

class User {
  name: string;
  lastName: string;
  private role = "user";

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

interface IMiddleware {
  routes: string[];
  callback(req: object, res: object, next: () => {}): void;
}

class MiddlewareAccess implements IMiddleware {
  routes = ["/users", "/books"];
  callback(req: object, res: object, next: () => {}) {}
}

class MiddlewareValidate implements IMiddleware {
  routes = ["/users/add", "/books/add"];
  validate(body: object): boolean {
    return true;
  }

  callback(req: object, res: object, next: () => {}) {}
}

class MiddlewareTranslate implements IMiddleware {
  routes = ["/books/translate"];
  callback(req: object, res: object, next: () => {}) {}
}
