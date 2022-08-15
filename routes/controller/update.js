const express = require('express');
const router = express.Router();
const updateBookModel = require("../model/update");


router.put('/update/:id',  function (req, res, next) {
    try {
        let response = updateBookModel.updateBook(req);
        console.log(response);
        res.json(response);
    }
    catch (error) {
        res.json(error)
        next(error);
    }
});

module.exports = router;



