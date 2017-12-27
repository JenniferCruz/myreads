import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class BookView extends React.Component {
    render() {
        const book = this.props.book;

        return (<li key={book.isbn}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.image }}></div>
                    <BookShelfChanger/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        </li>);
    }
}

export default BookView;
