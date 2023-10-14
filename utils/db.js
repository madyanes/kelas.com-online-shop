import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config();

const dbPool = mysql2.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default dbPool;
