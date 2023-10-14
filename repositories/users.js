import dbPool from '../utils/db.js';

const getUsers = async () => {
  const query = 'SELECT * FROM Users';
  return dbPool.query(query);
};

export { getUsers };
