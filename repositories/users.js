import dbPool from '../utils/db.js';

const getUsers = async () => {
  const query = 'SELECT * FROM Users';
  return dbPool.query(query);
};

const createUser = async (email, password) => {
  const query = `INSERT INTO Users (email, password) VALUES (?, ?)`;
  const values = [email, password];
  return dbPool.query(query, values);
};

export { getUsers, createUser };
