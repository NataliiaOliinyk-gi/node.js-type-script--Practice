// Создайте абстрактный класс Shape, который содержит:
// абстрактный метод getArea(): number
// абстрактный метод getPerimeter(): number
// поле name: string
// Создайте классы-наследники:
// Circle (с полем radius)
// Rectangle (с полями width, height)
// Реализуйте методы для расчета площади и периметра.

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(name: string, radius: number) {
    super(name);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const myArray: Shape[] = [
  new Circle("circle1", 3),
  new Rectangle("restangle1", 3, 4),
];

myArray.forEach((value) => {
  console.log(
    `${
      value.name
    } Area = ${value.getArea()} Perimeter = ${value.getPerimeter()}`
  );
});

// Создайте абстрактный класс PaymentMethod с методом pay(amount: number): void.
// Создайте конкретные классы:
// CreditCard
// PayPal
// CryptoWallet
// Добавьте им свои особенности, например, комиссия, лимит и т.д.

abstract class PaymentMethod {
  //   name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  abstract pay(amount: number): void;
}

type CreditCardParams = {
  cardNumber: string;
  cardExpireDate: Date;
  cvv: string;
  creditLimit?: number;
  balance?: number;
};

class CreditCard extends PaymentMethod {
  cardNumber: string;
  cardExpireDate: Date;
  cvv: string;
  creditLimit: number;
  balance: number;

  constructor({
    cardNumber,
    cardExpireDate,
    cvv,
    creditLimit = 0,
    balance = 0,
  }: CreditCardParams) {
    super();
    this.cardNumber = cardNumber;
    this.cardExpireDate = cardExpireDate;
    this.cvv = cvv;
    this.creditLimit = creditLimit;
    this.balance = balance;
  }

  isNan(value: unknown): boolean {
    return Number.isNaN(Number(value));
  }

  pay(amount: number): void {
    if (this.cardNumber.length !== 16) {
      throw new Error("Card number must be 16");
    }
    if (this.isNan(this.cardNumber)) {
      throw new Error("Card number must contains only numbers");
    }
    if (this.cardExpireDate < new Date()) {
      throw new Error("Card expired");
    }
    if (this.isNan(this.cvv)) {
      throw new Error("CVV must contains only numbers");
    }
    if (this.cvv.length !== 3) {
      throw new Error("CVV must be 3");
    }
    if (amount >= (this.balance + this.creditLimit)) {
        throw new Error("Insufficient funds")
    }
  }
}

class PayPal extends PaymentMethod {
  pay(amount: number): void {}
}

class CryptoWallet extends PaymentMethod {
  pay(amount: number): void {}
}

const creditCard = new CreditCard({
    cardNumber: "0000111122224444",
    cardExpireDate: new Date(2030, 0, 10),
    cvv: "123",
});
// const payPal = new PayPal("PayPal");
// const cryptoWallet = new CryptoWallet("CryptoWallet");

// console.log(creditCard);
// console.log(payPal);
// console.log(cryptoWallet);

console.log(Number("0n203"));
