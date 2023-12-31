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

const deleteUser = async (id) => {
  const query = `DELETE FROM Users WHERE id = ?`;
  const values = [id];
  return dbPool.query(query, values);
};

const updateUser = async (id, email, password) => {
  const query = `UPDATE Users SET email = ?, password = ? WHERE id = ?`;
  const values = [email, password, id];
  return dbPool.query(query, values);
};

const getUserByEmail = (email) => {
  const query = 'SELECT id, email, role, password FROM Users WHERE email = ?';
  const values = [email];
  return dbPool.query(query, values);
};

export { getUsers, createUser, deleteUser, updateUser, getUserByEmail };
