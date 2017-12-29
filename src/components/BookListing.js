import React from 'react'
import BookView from './BookView'

function BookListing(props) {
    return (
        <ol className="books-grid">
            {
                props.books.map(b =>
                    <li key={b.id}>
                        <BookView book={b} onChangeBookShelf={props.onChangeBookShelf} />
                    </li>)
            }
        </ol>
    );

}

export default BookListing;