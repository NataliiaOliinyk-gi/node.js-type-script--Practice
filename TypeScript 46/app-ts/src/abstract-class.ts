abstract class Employee {
  name: string;
  lastName: string;
  sallaryPerHour: number;
  abstract type: unknown;
  private workTermin = 0;
  protected abstract probation: boolean;

  constructor(name: string, lastName: string, sallaryPerHour: number) {
    this.name = name;
    this.lastName = lastName;
    this.sallaryPerHour = sallaryPerHour;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  getProbation(): boolean {
    return this.probation;
  }

  toogleProbation() {
    this.probation = !this.probation;
  }

  getWorkTerm(): number {
    return this.workTermin;
  }

  addWorkTerm(value: number): void {
    if (Number.isInteger(value) && value > 0) {
      this.workTermin += value;
      if (this.workTermin >= 3) {
        this.probation = false;
      }
    }
  }

  abstract calcSallary(workHours?: number): number;
}

class FullTimeEmployee extends Employee {
  type = "fulltime";
  protected probation: boolean;

  constructor(name: string, lastName: string, sallaryPerHour: number) {
    super(name, lastName, sallaryPerHour);
    this.probation = true;
  }

  calcSallary() {
    const workYears = Math.floor(this.getWorkTerm() / 12);
    const multiplier = 1 + workYears / 10;
    return this.sallaryPerHour * 8 * 22 * multiplier;
  }
}

class PartTimeEmployee extends Employee {
  type = "parttime";
  protected probation = true;

  constructor(name: string, lastName: string, sallaryPerHour: number) {
    super(name, lastName, sallaryPerHour);
  }

  calcSallary(workHours: number): number {
    return this.sallaryPerHour * workHours;
  }
}

const employee1 = new FullTimeEmployee("Nataliia", "Oliinyk", 34);
employee1.addWorkTerm(3);
console.log(employee1.calcSallary());

const employee2 = new PartTimeEmployee("Olena", "Yakovetch", 20);

const employeeList: Employee[] = [employee1, employee2];
const sallaryAll: number = employeeList.reduce(
  (acum: number, employee: Employee) => {
    if (employee instanceof FullTimeEmployee) {
      return acum + employee.calcSallary();
    }
    return acum + employee.calcSallary(80);
  },
  0
);

console.log(sallaryAll);

const now = new Date();
const date1 = new Date(2024, 6, 10);

console.log(now);
console.log(date1);

// console.log( now - date1);

console.log(now > date1);
console.log(date1 > now);