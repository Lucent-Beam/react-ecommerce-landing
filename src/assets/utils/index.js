/*
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @return {number} Total price
 *
 */

export const totalPrice = (products) => {
  return products.reduce((a, b) => a + b.price, 0);
};
