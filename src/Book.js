const _getAuthorsString = authors => {
    if (!authors)
        return;
    const rawString = `${authors.reduce((authorsString, currentAuthor) => authorsString + ", " + currentAuthor)}`;
    const lastComma = rawString.lastIndexOf(',');
    return lastComma === -1 ? rawString :
        rawString.substring(0, lastComma-1) + ' & ' + rawString.substring(lastComma+2);
};

const _getBookImageUrl = book => `url("${book.imageLinks.thumbnail}")`;

export const getBooks = books => books.map(book => {
    book.image = _getBookImageUrl(book);
    return book;
}) ;

export const getBooksMap = books => {
    const booksMap = {};
    books.forEach(book => {
        book.image = _getBookImageUrl(book);
        booksMap[book.id] = book;
    });
    return booksMap;
};