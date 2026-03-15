const express = require('express');
const app = express();

console.log('hola mundo');

app.get("/", (req, res, next) => {
    res.status(200);
    res.send('Bienvenido al servidor');
});

app.get("/:name", (req,res, next) =>{
    res.status(200);
    req.params.name; 
    res.send("Estas en la pagina 'nombre' ");
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
