import * as productRepo from '../repositories/products.js';
import { successResponse, errorResponse } from '../utils/response.js';

const getProducts = async (req, res, next) => {
  try {
    const [products] = await productRepo.getProducts();
    successResponse(res, 'Products fetched successfully', products);
  } catch (error) {
    errorResponse(res, 'Products fetching failed', 401);
    next(error);
  }
};

export { getProducts };
