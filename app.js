import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import router from './route/index.js';
import { sequelize } from './db/database.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));

app.use(router);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500).send()
});

sequelize.sync({ force: false }).then(() => {
    console.log('데이터베이스 연결!');
    app.listen(8080);
}).catch((err) => {
    console.error((err));
})
