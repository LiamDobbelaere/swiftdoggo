const dotenv = require('dotenv');
dotenv.config();

const { PORT } = process.env;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});