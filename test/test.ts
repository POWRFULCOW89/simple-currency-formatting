import { formatCurrency } from "../dist/index.js";
// const { formatCurrency } = require("simple-currency-formatting");

console.log(formatCurrency(1004.3, 2, ".", ",", "$", "USD"));