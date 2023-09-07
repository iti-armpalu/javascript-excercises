/*

 * --- Excercise ---
 *  Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

 * --- Examples ---
 * // 1 bottle of milk & 1 box of cereals:
      getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Cereals", quantity: 1, price: 2.50 }
      ]) ➞ 4
* // // Several groceries:
        getTotalPrice([
          { product: "Milk", quantity: 1, price: 1.50 },
          { product: "Eggs", quantity: 12, price: 0.10 },
          { product: "Bread", quantity: 2, price: 1.60 },
          { product: "Cheese", quantity: 1, price: 4.50 }
        ]) ➞ 10.4

 * --- Notes ---
 * - There might be a floating point precision problem in here...
 */

function getTotalPrice(groceries) {
  let totalPrice = groceries.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0);

  return (Math.floor(totalPrice * 100 ) / 100).toFixed(1);
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.52 },
    { product: "Cereals", quantity: 1, price: 2.53 },
  ])
);

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
