const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();


//Conexion DB, se trabaja con atlas para trabajar en linea con MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("db conected")).catch((error) => console.error(error));


app.use(express.json());

app.use('/api/noticias', require('./routes/noticia'));

//Puerto para conectarse
app.listen(port, () => {
    console.log("Server started at port: ", port);
});