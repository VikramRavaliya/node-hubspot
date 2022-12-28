import express from 'express';
import dotenv from 'dotenv';

import  userRouter from './routes/user.routes.js';

const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || process.env.APP_PORT || 3332;

app.use(`/api/pages`, userRouter);


var server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}!`));
server.timeout = 100000;

export default app;
