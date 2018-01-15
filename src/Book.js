const _getBookImageUrl = book => book.imageLinks ?
    `url("${book.imageLinks.thumbnail}")` :
    'url("img_not_available.png")';

export const getBooksArray = books => books.map(book => {
    book.image = _getBookImageUrl(book);
    return book;
});

export const getBooksMap = books => {
    const booksMap = {};
    books.forEach(book => {
        book.image = _getBookImageUrl(book);
        booksMap[book.id] = book;
    });
    return booksMap;
};