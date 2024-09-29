const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log(`The server is running my bro, in the port: ${PORT}\nhttp://localhost:3000/`);
    
})