//esse arquivo é usado para a criacao de uma rota, essa rota deve ser adicionada no arquivo principal(app.js) por meio de um middleware

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets back all the questions
router.get('/', async (req,res) => {
    try{
        const questions = await Post.find(); //Post do metodo
        res.json(questions);
    }catch (err){
        res.json({message:err});
    }
});

//specific questions by url
router.get('/:questionId', async (req,res) => {
    try{
        const question = await Post.findById(req.params.questionId);
        res.json(question);
    } catch (err){
        res.json({message: err});
    }
});

//submits a question
router.post('/', async (req,res) => {
    const post = new Post({
        materia: req.body.materia,
        enunciado: req.body.enunciado,
        alternativaA: req.body.alternativaA,
        alternativaB: req.body.alternativaB,
        alternativaC: req.body.alternativaC,
        alternativaD: req.body.alternativaD,
        alternativaE: req.body.alternativaE,
        alternativaCorreta: req.body.alternativaCorreta,
        explicacaoDaQuestao: req.body.explicacaoDaQuestao
    });
    try{
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err){
        res.json({message: err});
    }
});

//delete specific question by url
router.delete('/:quetionId', async (req,res) =>{
    try{
        const removedQuestion = Post.remove({_id: req.params.quetionId});
        res.json(removedQuestion);
    } catch (err){
        res.json({message: err});
    }

});

module.exports = router;