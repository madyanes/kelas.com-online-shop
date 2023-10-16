import dbPool from '../utils/db.js';
import { getCurrentDate } from '../utils/datetime.js';

const createOrder = async (totalPrice, shippingAddress) => {
  const orderNumber = +new Date();
  const query = `INSERT INTO Orders (order_date, order_status, total_price, order_number, shipping_address, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;
  const values = [
    getCurrentDate(),
    'pending',
    totalPrice,
    orderNumber.toString(),
    shippingAddress,
  ];
  return dbPool.query(query, values);
};

const getTotalPrice = async (product_id, qty) => {
  const query = `SELECT price FROM Products WHERE product_id = ${product_id}`;
  const [[{ price }]] = await dbPool.query(query);
  return price * qty;
};

const createCart = async (productId, qty, orderId) => {
  const query = `INSERT INTO Carts (product_id, quantity, order_id, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW());`;
  const values = [productId, qty, orderId];
  return dbPool.query(query, values);
};

export { createOrder, getTotalPrice, createCart };
