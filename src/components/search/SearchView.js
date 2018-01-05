import React from 'react'
import MessageNotFound from './MessageNotFound'
import * as BooksAPI from '../../BooksAPI'
import * as Books from '../../Book'
import BookListing from "../BookListing";
import SearchBar from "./SearchBar";

class SearchView extends React.Component {
    state = {
        query: '',
        booksResults: []
    };

    updateQuery = query => {
        if (query.length === 0) {
            this.setState({ query: query, booksResults:[] });
        } else {
            this.setState({ query: query });
            BooksAPI.search(this.state.query).then(books => {
                if (books && !books.error)
                    this.setState({ booksResults: Books.getBooks(books)});
            });
        }
    };

    render() {
        let results = this.state.booksResults.length === 0 ?
            <MessageNotFound searchQuery={this.state.query}/> :
            <BookListing books={this.state.booksResults} onChangeBookShelf={this.props.onChangeBookShelf}/>;

        return (
            <div className="search-books">
                <SearchBar app={this.props.app} query={this.state.query} updateQuery={this.updateQuery} />
                <div className="search-books-results">{results}</div>
            </div>
        );
    }
}

export default SearchView;