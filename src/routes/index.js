const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send({
        titulo:'Cadastro de funcionários',
        data:'15/03/2022'
    })
})

module.exports = router