const array = require('../../services/shared/books');

exports.deleteBook= function (req) {
    let id = req.params.id;

    try {
        console.log("id",id);
        array.arrayBooks.splice(0, id);

        return { status: 1, response: 'Book removed successfully'};
        
    } catch (error) {
        console.log(error);
        return { status: -1, response: error.toString() };
    }
    
}