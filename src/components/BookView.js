import React from 'react';
import BookShelfChanger from './BookShelfChanger';

function BookView(props) {
    const book = props.book;

    return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.image }}></div>
                    <BookShelfChanger onChangeBookShelf={props.onChangeBookShelf} book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(' & ') : ''}</div>
            </div>
    );
}

export default BookView;
