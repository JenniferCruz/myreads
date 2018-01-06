import React from 'react'
import BookListing from './BookListing'

class BookShelf extends React.Component {
    render() {
        const books = this.props.books;

        return (<div className="bookshelf">
            <div className="bookshelf-books">
                <BookListing books={books} onChangeBookShelf={this.props.onChangeBookShelf}/>
            </div>
        </div>);
    }
}

export default BookShelf;
