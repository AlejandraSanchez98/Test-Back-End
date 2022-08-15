const array = require('../../services/shared/books');

exports.updateBook= function (req) {
    let body = req.body;
    let id = req.params.id;
    console.log("id",id);
    try {
        console.log("arreglo",array.arrayBooks[0]);
        console.log("posicion",array.arrayBooks[id-1]);
        array.arrayBooks[id-1].bookTitle = body.bookTitle;
        array.arrayBooks[id-1].author = body.author;
        array.arrayBooks[id-1].publicationYear = body.publicationYear;
        console.log("arrayBooks", array);

        return { status: 1, response: 'Book update successfully'};
        
    } catch (error) {
        console.log(error);
        return { status: -1, response: error.toString() };
    }
    
}
