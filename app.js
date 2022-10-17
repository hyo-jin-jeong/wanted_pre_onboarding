import cors from 'cors';
import express from 'express';

const app = express();


app.use(express.json());
app.use(cors({ origin: '*' })); // 옵션 알아보기

app.get('/', (req, res) => {
    res.send('dddd');
});

app.use((req, res, next) => {
    res.sendStatus(404);
});


app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500).send()
});

const server = app.listen(8080);