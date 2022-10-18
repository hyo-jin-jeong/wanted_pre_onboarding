import 'express-async-errors';

import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { exceptionHandler } from './middleware/exceptionHandler.js';
import express from 'express';
import morgan from 'morgan';
import router from './route/index.js';
import { sequelize } from './db/database.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));

app.use(router);

app.use(exceptionHandler);
app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
    console.log('데이터베이스 연결!');
    app.listen(8080);
}).catch((err) => {
    console.error((err));
})
