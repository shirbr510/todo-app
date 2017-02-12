var express = require('express');
var router = express.Router();

router.use('/todos',require('./controllers/todos'));

module.exports = router;