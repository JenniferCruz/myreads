import React from 'react'
import MessageNotFound from './MessageNotFound'
import * as BooksAPI from '../../BooksAPI'
import * as Books from '../../Book'
import BookListing from "../BookListing";
import SearchBar from "./SearchBar";

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

        return (
            <div className="search-books">
                <SearchBar app={this.props.app} query={this.state.query} updateQuery={this.updateQuery} />
                <div className="search-books-results">{results}</div>
            </div>
        );
    }
}

export default SearchView;