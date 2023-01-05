import express from 'express';
import path from 'path';
import logger from 'morgan';
import flash from 'express-flash';
import { resolve } from 'path';
import dotenv from 'dotenv';

import  userRouter from './routes/user.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/views', express.static(resolve('views')));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || process.env.APP_PORT || 3332;


app.use(`/api/pages`, userRouter);


var server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}!`));
server.timeout = 100000;

export default app;
