const axios = require("axios");
const noticia = require("../models/noticia");
let respuesta;

//Obtenemos la informacion Json de la api y almacenamos en la base de datos
exports.createNoticia = (req, res) => {
    axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').then(resp => {
        respuesta = (resp.data.hits)
        res.send(respuesta);
        try {
            var noticias;
            for (x of respuesta) {
                noticias = new noticia({
                    created_at: x.created_at,
                    title: x.title,
                    url: x.url,
                    author: x.author,
                    points: x.points,
                    story_text: x.story_text,
                    comment_text: x.comment_text,
                    num_comments: x.num_comments,
                    story_id: x.story_id,
                    story_title: x.story_title,
                    story_url: x.story_url,
                    parent_id: x.parent_id,
                    created_at_i: x.created_at_i
                })
                noticias.save();
            }
        } catch (error) {
            console.log(error);
        }
    });




}

exports.getNoticias = async(req, res) => {
    try {
        const noticias = await noticia.find();
        res.json(noticias)
    } catch (error) {
        console.log(error);
    }
}
exports.eliminarNoticia = async(req, res) => {
    try {
        let noticias = await noticia.findById(req.params.id);
        if (!noticias) {
            res.status(400).json({ msg: 'no existe la noticia' })
        }
        await noticia.findByIdAndRemove({ _id: req.params.id })
        res.json({ msg: 'eliminado con exito' });
    } catch (error) {
        res.status(500).json({ msg: 'error' })
        console.log(error);
    }
}