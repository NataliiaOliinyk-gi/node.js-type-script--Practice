// Задание 1
// Создание типизированного объекта
// 1. Создайте объект `car`, который будет описывать машину.
// 2. Объект должен содержать следующие свойства:
// ○ `brand` (строка)
// ○ `model` (строка)
// ○ `year` (число)
// ○ `isElectric` (булево значение)
// 3. Затем напишите функцию `describeCar`, которая принимает этот объект в качестве параметра и
// возвращает строку с описанием машины в следующем формате: "Brand Model Year, Electric: Yes/No".

console.log("Задание 1");

interface ICar {
  brand: string;
  model: string;
  year: number;
  isElectric: boolean;
}

const describeCar = (car: ICar): string => {
  return `Brand ${car.brand} Model ${car.model} Year ${car.year}, Electric: ${car.isElectric}`;
};

const myCar: ICar = {
  brand: "Renoult",
  model: "Megan",
  year: 2012,
  isElectric: false,
};
// const myCar2: ICar = {
//   brand: "Renoult",
//   model: "Megan",
//   year: "2012",
//   isElectric: false,
// };
console.log(describeCar(myCar));

// Задание 2
// Типизация массива с числами
// 1. Создайте массив чисел `scores`, представляющий результаты тестов студентов.
// 2. Напишите функцию `averageScore`, которая принимает этот массив и возвращает средний балл.

console.log("Задание 2");

const scores: number[] = [1, 2, 3, 1, 2, 1];

const averageScore = (array: number[]): number => {
  const sum = array.reduce((acc, item) => acc + item);
  return Number((sum / array.length).toFixed(1));
};

console.log(averageScore(scores));

// Задание 3
// Использование кортежей
// 1. Создайте кортеж `personInfo`, который содержит имя (строка) и возраст (число).
// 2. Затем напишите функцию `printPersonInfo`, которая принимает этот кортеж как параметр и выводит его
// элементы в консоль.

console.log("Задание 3");

// type PersonInfo = [name: string, age: number];
type PersonInfo = [string, number];

const printPersonInfo = (personInfo: PersonInfo): void => {
  console.log(`Name ${personInfo[0]} age ${personInfo[1]}`);
};

printPersonInfo(["Anna", 21]);

// Задание 4
// Массив объектов
// 1. Создайте массив объектов `products`, где каждый объект описывает товар и содержит следующие
// свойства: `name` (строка), `price` (число), и `inStock` (булево значение).
// 2. Напишите функцию `listAvailableProducts`, которая принимает этот массив и выводит названия товаров,
// которые есть в наличии.

console.log("Задание 4");

interface IProduct {
  name: string;
  price: number;
  inStock: boolean;
}

const listAvailableProducts = (array: IProduct[]): IProduct[] => {
  return array.filter((item: IProduct): boolean => item.inStock);
};

const myProducts: IProduct[] = [
  {
    name: "хлеб",
    price: 2.1,
    inStock: true,
  },
  {
    name: "масло",
    price: 3,
    inStock: false,
  },
  {
    name: "молоко",
    price: 1.8,
    inStock: false,
  },
];

console.log(listAvailableProducts(myProducts));

// Задание 5
// Обработка неизвестного типа
// 1. Создайте переменную `data` типа `unknown`, которая может принимать значения разных типов.
// 2. Напишите функцию `processData`, которая принимает эту переменную и проверяет ее тип.
// 3. Если это строка, функция должна вернуть её длину.
// 4. Если это число, функция должна вернуть его квадрат. В любом другом случае функция должна вернуть
// `null`.

console.log("Задание 5");

const var1: string = "value";
const var2: number = 5;
const var3: boolean = false;

const processData = (data: unknown) => {
  switch (typeof data) {
    case "string":
      return `Длина ${data.length}`;

    case "number":
      return data * data;

    default:
      return null;
  }
};

console.log(processData(var1));
console.log(processData(var2));
console.log(processData(var3));

// Задание 6
// Функция с типом `void` и `never`
// 1. Напишите функцию `logMessage`, которая принимает строку `message` и выводит её в консоль, не
// возвращая никакого значения (используйте тип `void`).
// 2. Затем напишите функцию `throwError`, которая принимает строку `errorMessage`, выбрасывает
// исключение с этим сообщением и имеет тип `never`.

const logMessage = (message: string): void => {
  console.log(message);
};

const throwError = (errorMessage: string): never => {
  throw new Error(errorMessage);
};
