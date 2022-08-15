const express = require('express');
const router = express.Router();
const deleteBookModel = require("../model/delete");


router.delete('/delete/:id',  function (req, res, next) {
    try {
        let response = deleteBookModel.deleteBook(req);
        console.log(response);
        res.json(response);
    }
    catch (error) {
        res.json(error)
        next(error);
    }
});

module.exports = router;
