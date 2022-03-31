const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema({
    created_at: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: false
    },
    story_text: {
        type: String,
        required: false
    },
    comment_text: {
        type: String,
        required: true
    },
    num_comments: {
        type: String,
        required: false
    },
    story_id: {
        type: Number,
        required: true
    },
    story_title: {
        type: String,
        required: true
    },
    story_url: {
        type: String,
        required: false
    },
    parent_id: {
        type: Number,
        required: false
    },
    created_at_i: {
        type: Number,
        required: false
    }


})

module.exports = mongoose.model('Noticia', noticeSchema)