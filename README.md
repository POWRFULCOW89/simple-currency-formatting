# simple-currency-formatting

Library to help formatting currency values.

## Example

```js
const { formatCurrency } = require("simple-currency-formatter");

let string = formatCurrency(1004.3, 2, ".", ",", "$", "USD");
// output: $1,004.30 USD
```
