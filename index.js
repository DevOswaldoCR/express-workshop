const express = require('express');
const app = express();

console.log('hola mundo');

app.get("/", (req, res, next) => {
    res.status(200);
    res.send('Hola mundo y Bienvenido');
});

app.listen(3000, () => {
    console.log('Server is running...');
});
