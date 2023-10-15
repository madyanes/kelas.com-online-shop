import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import * as userRepo from '../repositories/users.js';
import { successResponse, errorResponse } from '../utils/response.js';

dotenv.config();

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
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      try {
        const [result] = await userRepo.createUser(email, hashedPassword);
        const payload = { id: result.insertId, email };
        successResponse(res, 'User created successfully', payload, 201);
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          // Ini adalah kode kesalahan yang mengindikasikan email sudah ada (unik)
          errorResponse(res, 'Email is already in use', 409);
        } else {
          // Penanganan kesalahan lainnya
          throw error;
        }
      }
    });
  } catch (error) {
    errorResponse(res, 'User creation failed', 500);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    const [result] = await userRepo.deleteUser(id);
    if (result.affectedRows === 0)
      throw new Error(`User with ID ${id} is not found`);
    successResponse(res, 'User deleted successfully', result);
  } catch (error) {
    errorResponse(res, error.message || 'User deletion failed', 401);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id, email, password } = req.body;
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      const [result] = await userRepo.updateUser(id, email, hashedPassword);
      if (result.affectedRows === 0)
        throw new Error(`User with ID ${id} is not found`);
      successResponse(res, 'User updated successfully', result);
    });
  } catch (error) {
    errorResponse(res, error.message || 'User update failed', 400);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [[user]] = await userRepo.getUserByEmail(email);
    if (user.length === 0) throw new Error('User not found');

    bcrypt.compare(password, user.password, (error, result) => {
      if (result) {
        const payload = { id: user.id, email: user.email };
        const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
          expiresIn: '1h',
        });
        const refreshToken = jwt.sign(
          payload,
          process.env.SECRET_REFRESH_TOKEN,
          {
            expiresIn: '8h',
          }
        );
        const token = { accessToken, refreshToken };
        successResponse(res, 'User login successfully', token);
      } else {
        throw new Error('Incorrect password');
      }
    });
  } catch (error) {
    errorResponse(res, error.message || 'User login failed', 401);
    next(error);
  }
};

const validateToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      const accessToken = bearerHeader.split(' ')[1];

      if (!accessToken) throw new Error('Access token is required');

      jwt.verify(
        accessToken,
        process.env.SECRET_ACCESS_TOKEN,
        (error, claims) => {
          if (error) throw new Error('Invalid access token');
          req.claims = claims;
          next();
        }
      );
    } else {
    }
  } catch (error) {
    errorResponse(res, error.message || 'Invalid access token', 401);
    next(error);
  }
};

export { getUsers, createUser, deleteUser, updateUser, login, validateToken };
