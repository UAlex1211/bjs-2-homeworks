"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d === 0) {
    arr[0] = -b / (2 * a)
  }

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

  return arr;
}

solveEquation(1, 5, 4);



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;

  let monthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));

  let totalAmount = monthPay * countMonths;
  totalAmount = Number(totalAmount.toFixed(2));
  
  return totalAmount;
}

calculateTotalMortgage(10, 0, 50000, 12);
