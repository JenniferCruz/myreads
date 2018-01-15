import React from 'react'
import BookListing from './BookListing'

class BookShelf extends React.Component {
    render() {
        const books = this.props.books;

        return (<div className="bookshelf">
            <div className="bookshelf-books">
                {
                    books.length === 0 ?
                        <div>{this.props.messageOnEmptyShelf}</div> :
                        <BookListing books={books} onChangeBookShelf={this.props.onChangeBookShelf}/>
                }
            </div>
        </div>);
    }
}

export default BookShelf;
