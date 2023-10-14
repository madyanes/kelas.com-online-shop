import dotenv from 'dotenv';
import express from 'express';
import logger from 'pino-http';
import * as usersService from './services/users.js';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(logger());

app.get('/', (req, res) => res.send('Madyan Eka Septian'));

app.get('/users', usersService.getUsers);
app.post('/users', usersService.createUser);
app.delete('/users', usersService.deleteUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
