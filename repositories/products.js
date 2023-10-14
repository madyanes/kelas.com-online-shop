import dbPool from '../utils/db.js';

const getProducts = async () => {
  const query = 'SELECT * FROM Products';
  return dbPool.query(query);
};

export { getProducts };
