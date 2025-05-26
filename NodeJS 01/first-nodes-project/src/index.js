import { getCurrentMonth, isLeapYear } from "./dateFunctions/index.js";
import fileOperations from "./functions/fileFuntions.js";


console.log(getCurrentMonth());
console.log(isLeapYear(2024));

fileOperations();