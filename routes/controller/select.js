const express = require('express');
const router = express.Router();
const selectBookModel = require("../model/select");


router.get('/select',  function (req, res, next) {
    try {
        let response = selectBookModel.selectBook(req);
        console.log(response);
        res.json(response);
    }
    catch (error) {
        res.json(error)
        next(error);
    }
});

module.exports = router;



