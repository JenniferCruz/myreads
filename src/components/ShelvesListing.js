import React from 'react'
import BookShelf from './BookShelf'

function ShelvesListing(props) {
    const {books, onChangeBookShelf} = props;

    return (
        <div id="shelves-listing" className="list-books-content">
            <div>
                <BookShelf id='currently-reading-shelf' title='Currently Reading'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'currentlyReading')}/>
                <BookShelf id='want-to-read-shelf' title='Want to Read'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'wantToRead')}/>
                <BookShelf id='read-shelf' title='Read'
                    onChangeBookShelf={onChangeBookShelf}
                    books={books.filter(book => book.shelf === 'read')}/>
            </div>
        </div>
    );
}

export default ShelvesListing;