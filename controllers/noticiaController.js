const axios = require("axios");
const noticia = require("../models/noticia");
let respuesta;

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
                console.log(x.author);
            }

        } catch (error) {
            console.log(error);
        }
    });




}