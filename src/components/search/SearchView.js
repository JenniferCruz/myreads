import React from 'react'
import MessageNotFound from './MessageNotFound'
import * as BooksAPI from '../../BooksAPI'
import * as Books from '../../Book'
import BookListing from "../BookListing";

class SearchView extends React.Component {
    state = {
        query: '',
        books: []
    };

    // TODO: set books back to [] when query is emptied by user
    // TODO: Handle errors
    updateQuery = query => {
        this.setState({ query: query });
        BooksAPI.search(this.state.query).then(books => {
            if (books)
                this.setState({ books: Books.getBooks(books)});
        });
    };

    render() {
        // TODO: Style sorry message and add list of available categories. Can you read it from the md?
        let results = this.state.books.length === 0 ?
            <MessageNotFound searchQuery={this.state.query}/> :
            <BookListing books={this.state.books} onChangeBookShelf={this.props.onChangeBookShelf}/>;

        return (<div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.props.app.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" value={this.state.query}
                           onChange={event => {this.updateQuery(event.target.value)}}/>

                </div>
            </div>
            <div className="search-books-results">
                {results}
            </div>
        </div>);
    }
}

export default SearchView;