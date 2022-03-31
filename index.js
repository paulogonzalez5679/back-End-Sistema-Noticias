const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 3000;
require("dotenv").config();
var respuesta = '';
const noticeSchema = require("./models/noticia")

//Conexion DB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("db conected")).catch((error) => console.error(error));

app.use(express.json());
app.use('/api/guardarNoticias', require('./routes/noticia'));

//Puerto para conectarse
app.listen(port, () => {
    console.log("Server started at port: ", port);
});