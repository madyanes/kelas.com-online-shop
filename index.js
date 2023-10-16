import dotenv from 'dotenv';
import express from 'express';
import logger from 'pino-http';
import * as usersService from './services/users.js';
import * as productsService from './services/products.js';
import * as ordersService from './services/orders.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(logger());

app.get('/', (req, res) =>
  res.send('This application is under development. Not ready for production.')
);

/** API endpoints to authenticate user */
app.post('/login', usersService.login);

/** API endpoints for the shop owner */
app.get('/users', usersService.validateToken, usersService.getUsers);
app.post('/users', usersService.createUser);
app.delete('/users', usersService.deleteUser);
app.put('/users', usersService.updateUser);

/** API endpoint for making orders */
app.post('/orders', ordersService.makeOrder);

/** API endpoints for products */
app.get('/products', productsService.getProducts);

app.listen(port, () => console.log(`Listening on port ${port}!`));
