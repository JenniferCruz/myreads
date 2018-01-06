import React from 'react'
import BookListing from './BookListing'

class BookShelf extends React.Component {
    render() {
        const books = this.props.books;

        return (<div className="bookshelf collapse multi-collapse" id={this.props.id}>
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <BookListing books={books} onChangeBookShelf={this.props.onChangeBookShelf}/>
            </div>
        </div>);
    }
}

export default BookShelf;
