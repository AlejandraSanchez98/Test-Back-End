const express = require('express');
const router = express.Router();
const insertBookModel = require("../model/insert");


router.post('/insert',  function (req, res, next) {
    try {
        let response = insertBookModel.insertBook(req);
        console.log(response);
        res.json(response);
    }
    catch (error) {
        res.json(error)
        next(error);
    }
});

module.exports = router;



