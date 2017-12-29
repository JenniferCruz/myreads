const _getAuthorsString = authors => {
    if (!authors)
        return;
    const rawString = `${authors.reduce((authorsString, currentAuthor) => authorsString + ", " + currentAuthor)}`;
    const lastComma = rawString.lastIndexOf(',');
    return lastComma === -1 ? rawString :
        rawString.substring(0, lastComma-1) + ' & ' + rawString.substring(lastComma+2);
};

export const getBooks = books => books.map(book => {
    return {
        id: book.id,
        shelf: book.shelf,
        image: `url("${book.imageLinks.thumbnail}")`,
        title: book.title,
        author: _getAuthorsString(book.authors)
    }
}) ;