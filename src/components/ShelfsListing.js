import React from 'react'
import BookShelf from './BookShelf'

function ShelfsListing(props) {
    const {books, onChangeBookShelf} = props;

    return (
        <div className="list-books-content">
            <div>
                <BookShelf title='Currently Reading'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'currentlyReading')}/>
                <BookShelf title='Want to Read'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'wantToRead')}/>
                <BookShelf title='Read'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'read')}/>
            </div>
        </div>
    );
}

export default ShelfsListing;