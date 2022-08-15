const array = require('../../services/shared/books');

exports.insertBook= function (req) {
    let body = req.body;
    let insertValues = {};
    try {

        insertValues = {
            id: body.id,
            bookTitle: body.bookTitle,
            author: body.author,
            publicationYear: body.publicationYear
        }
        array.arrayBooks.push(insertValues);

        return { status: 1, response: 'Book registered successfully'};
        
    } catch (error) {
        console.log(error);
        return { status: -1, response: error.toString() };
    }
    
}
