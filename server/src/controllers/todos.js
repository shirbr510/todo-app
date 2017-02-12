var express = require('express');
var router = express.Router();
import TodosProvider from '../db/TodosProvider'

router.get('/',async function (req, res) {
    var provider=new TodosProvider();

    var todos = await provider.getAll();

    res.json({ todos});
});

router.get('/:id',async function (req, res) {
    var id=req.params.id;

    var provider=new TodosProvider();

    var todo = await provider.get(id);

    res.json({todo});
});

router.post('',function (req, res) {
    var todo = req.body;
    res.json({ message: 'Saved '+todo.id});
});

router.delete('/:id',function (req, res) {
    var id=req.params.id;
    res.json({ message: 'Removed '+id});
});

module.exports = router;
