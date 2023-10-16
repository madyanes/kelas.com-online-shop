import {
  createOrder,
  getTotalPrice,
  createCart,
} from '../repositories/orders.js';
import { successResponse, errorResponse } from '../utils/response.js';

const makeOrder = async (req, res, next) => {
  /**
   * Keranjang (cart) berupa array dari objek yang mencakup properti `product_id`, dan `qty`.
   *
   * Pastikan produk yang hendak dibeli ada di database.
   *
   * Belum ada validasi, waktu terlalu singkat, kurang jam terbang di bidang backend.
   */
  try {
    const { cart, shipping_address } = req.body;
    const productItems = [];
    let totalPrice = 0;

    for (const productItem of cart) {
      const { product_id, qty } = productItem;
      const price = await getTotalPrice(product_id, qty);
      totalPrice += price;
      productItems.push({ product_id, qty });
    }

    const [{ insertId: orderId }] = await createOrder(
      totalPrice,
      shipping_address
    );

    for (const product of productItems) {
      const { product_id, qty } = product;
      await createCart(product_id, qty, orderId);
    }

    successResponse(res, 'Order created successfully', 'result');
  } catch (error) {
    errorResponse(res, 'Order creation failed', 500);
    next(error);
  }
};

export { makeOrder };
