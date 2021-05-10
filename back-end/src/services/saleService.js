const saleModel = require('../models/saleModel');

const createSale = async (userId, totalPrice, products, address) => {
  const { street, number } = address;
  const formatedTotalPrice = Number(totalPrice.replace(',', '.'));
  const newSaleId = await saleModel.createSale(userId, formatedTotalPrice, street, number);
  const productsSaled = products.map(({ id, quantity }) => [newSaleId, id, quantity]);
  console.log(productsSaled);
  await saleModel.createSaleProducts(productsSaled);
};

const getSales = async (userId, role) => {
  if (role === 'administrator') return saleModel.getAllSales();
  if (role === 'client') return saleModel.getSalesByUserId(userId);
};

module.exports = {
  createSale,
  getSales,

};