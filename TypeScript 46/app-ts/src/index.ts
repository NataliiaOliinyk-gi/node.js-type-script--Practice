import createBook, { Book } from "./functions/createBook";
import createRole from "./functions/createRole";

// import "./abstract-class"

import "./task1"

// import "./never";
// import "./unknoun";
// import "./interface-advanced";
// import "./generic"

type Role = "user" | "admin" | "manager";

const roles: Role[] = ["user", "admin", "manager"];

type BooleanError = boolean | never;

const checkRole = (role: Role): BooleanError => {
  if (roles.includes(role)) return true;
  throw new Error("Not allow role");
};

// console.log(checkRole("user"));

// console.log(checkRole("newuser"));

// const createBook = (name: string, year: Date, description?: string ): object => {
//     return {
//         name,
//         year,
//         description
//     }
// };

// Типизация функции, описываем в type или interface

type User = {
  calc: (value: number) => void;
};

const user: User = {
  calc(value) {
    console.log(value);
  },
};
