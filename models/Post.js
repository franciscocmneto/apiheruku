const mongoose = require('mongoose');

const PostQuestion = mongoose.Schema({

    materia: {
        type: String,
        required: true
        //essa estrutura de chaves nao permite que o campo seja nulo na hora da requisicao post
    },
    enunciado: {
        type: String,
        required: true
    },
    alternativaA: {
        type: String,
        required: true
    },
    alternativaB: {
        type: String,
        required: true
    },
    alternativaC: {
        type: String,
        required: true
    },
    alternativaD: {
        type: String,
        required: true
    },
    alternativaE: {
        type: String,
        required: true
    },
    alternativaCorreta: {
        type: String,
        required: true
    },
    explicacaoDaQuestao: String
});

/*
    "materia": "",
    "enunciado": "",
    "alternativaA": "",
    "alternativaB": "",
    "alternativaC": "",
    "alternativaD": "",
    "alternativaE": "",
    "alternativaCorreta": "",
    "explicacaoDaQuestao": ""

*/

module.exports = mongoose.model('Posts', PostQuestion);