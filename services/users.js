import * as userRepo from '../repositories/users.js';
import { successResponse, errorResponse } from '../utils/response.js';

const getUsers = async (req, res, next) => {
  try {
    const [users] = await userRepo.getUsers();
    successResponse(res, 'Users fetched successfully', users);
  } catch (error) {
    errorResponse(res, 'Users fetching failed', 401);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [result] = await userRepo.createUser(email, password);
    const payload = { id: result.insertId, email };
    successResponse(res, 'User created successfully', payload, 201);
  } catch (error) {
    errorResponse(res, 'User creation failed', 409);
    next(error);
  }
};

export { getUsers, createUser };
