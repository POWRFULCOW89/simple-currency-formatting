function formatCurrency(
  number: number,
  decimals: number,
  dec_point: string,
  thousands_sep: string,
  symbol: string,
  currency: string
) {
  // Strip all characters but numerical ones.
  number = +(number + "").replace(/[^0-9+\-Ee.]/g, "");
  var n = !isFinite(+number) ? 0 : +number,
    precision = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n: number, precision: number) {
      var k = Math.pow(10, precision);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  var finalString = (
    precision ? toFixedFix(n, precision) : "" + Math.round(n)
  ).split(".");
  if (finalString[0].length > 3) {
    finalString[0] = finalString[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((finalString[1] || "").length < precision) {
    finalString[1] = finalString[1] || "";
    finalString[1] += new Array(precision - finalString[1].length + 1).join(
      "0"
    );
  }
  return symbol + finalString.join(dec) + " " + currency;
}

export { formatCurrency };
