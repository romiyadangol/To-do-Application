const express = require('express');
const app = express();
const todoRouter = require('./routes/todo');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(express.json());

app.use('/todo', todoRouter);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});