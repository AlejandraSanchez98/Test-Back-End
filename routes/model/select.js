const array = require('../../services/shared/books');

exports.selectBook= function () {
    let getBooks = [];
    try {
        if (array.arrayBooks.length == 0) {
            return { status: 0, response: [] };
        }

        getBooks = array.arrayBooks;
        return { status: 1, response: getBooks};
        
    } catch (error) {
        console.log(error);
        return { status: -1, response: error.toString() };
    }
    
}