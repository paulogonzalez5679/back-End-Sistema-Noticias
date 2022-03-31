const express = require("express");
const router = express.Router();
const noticiaController = require("../controllers/noticiaController")





router.post('/', noticiaController.createNoticia);

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