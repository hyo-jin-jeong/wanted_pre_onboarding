import cors from 'cors';
import express from 'express';
import router from './route/index.js';
const app = express();


app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(router);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500).send()
});

const server = app.listen(8080);