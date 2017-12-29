import React from 'react'
import BookView from './BookView'

class BookShelf extends React.Component {
    render() {
        const books = this.props.books;

        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(b => <li key={b.isbn}><BookView book={b} onChangeBookShelf={this.props.onChangeBookShelf} /></li>)
                    }
                </ol>
            </div>
        </div>);
    }
}

export default BookShelf;
