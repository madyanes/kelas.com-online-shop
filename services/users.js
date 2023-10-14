import * as userRepo from '../repositories/users.js';

const getUsers = async (req, res) => {
  const [users] = await userRepo.getUsers();
  res.json(users);
};

export { getUsers };
