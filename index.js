import dotenv from 'dotenv';
import express from 'express';
import logger from 'pino-http';
import * as usersService from './services/users.js';
import * as productsService from './services/products.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(logger());

app.get('/', (req, res) => res.send('Madyan Eka Septian'));

/** API endpoints to authenticate user */
app.post('/login', usersService.login);

/** API endpoints for the shop owner */
app.get('/users', usersService.validateToken, usersService.getUsers);
app.post('/users', usersService.createUser);
app.delete('/users', usersService.deleteUser);
app.put('/users', usersService.updateUser);

/** API endpoints for products */
app.get('/products', productsService.getProducts);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
