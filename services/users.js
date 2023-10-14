import * as userRepo from '../repositories/users.js';

const getUsers = async (req, res) => {
  const [users] = await userRepo.getUsers();
  res.json(users);
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const [result] = await userRepo.createUser(email, password);
  res.json(result);
};

export { getUsers, createUser };
