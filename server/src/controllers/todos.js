var express = require('express');
var router = express.Router();

router.get('/',function (req, res) {
    res.json({ message: 'Got All'});
});

router.get('/:id',function (req, res) {
    var id=req.params.id;
    res.json({ message: 'Got '+id});
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
