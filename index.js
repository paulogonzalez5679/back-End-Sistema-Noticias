const express = require('express');
const mongoose = require("mongoose");
const { use } = require('./routes/noticia');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();


//Conexion DB, se trabaja con atlas para trabajar en linea con MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("db conected")).catch((error) => console.error(error));

//Verificacion para CORS (middleWare)
app.use(cors())

app.use(express.json());

app.use('/api/noticias', require('./routes/noticia'));

//Puerto para conectarse
app.listen(port, () => {
    console.log("Server started at port: ", port);
});