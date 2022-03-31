const express = require("express");
const router = express.Router();
const noticiaController = require("../controllers/noticiaController")

/*almacena el Json de la API, se comenta esta línea ya que ya fueron obtenidas todas las noticias
y almacenadas en la base de datos*/

//router.post('/', noticiaController.createNoticia);

//obtiene la informacion de la Base de datos 
router.get('/', noticiaController.getNoticias);
//elimina una noticia
router.delete('/:id', noticiaController.eliminarNoticia);
module.exports = router

















/*rutas
app.get("/noticias", (req, res) => {
    axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').then(resp => {
        respuesta = (resp.data.hits)
        console.log(respuesta);
        res.send(respuesta);
    });

});

/*app.post("/noticiasg", (req, res) => {
    const notice = noticeSchema(req.body);
    notice
        .save()
        .then((respuesta) => res.json(respuesta))
        .catch((error) => res.json({ message: error }));

});


app.post("/noticiasg", (req, res) => {
    res.send("create user");
    console.log("create user");
});*/