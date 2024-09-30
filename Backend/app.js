// Requerimos Express y todas las dependencias
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Almacenamos el valor del Puerto
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use(express.urlencoded({extended: false}));

app.use(cors({origin: 'http://localhost:3000', optionsSuccessStatus: '200'}));


// Iniciamos el servidor
app.listen(PORT, function () {
    console.log(`The server is running my bro, in the port: ${PORT}\nhttp://localhost:3000/`);
    
});