import React from 'react'
import BookView from './BookView'
import * as BooksAPI from '../BooksAPI'
import * as Books from '../Book'

class SearchView extends React.Component {
    state = {
        query: '',
        books: []
    };

    // TODO: Bug: this.state.query is not getting the first character
    updateQuery = query => {
        this.setState({ query: query });
        BooksAPI.search(this.state.query).then(books => {
            if (books)
                this.setState({ books: Books.getBooks(books)});
        });
    };

    render() {
        // TODO: Style sorry message and add list of available categories. Can you read it from the md?
        let results = !this.state.query ? '' :
            <div className='search-no-results'>
                <h2>No results for {this.state.query}</h2>
                <p>The term you entered did not bring up any results. Try using looking for something within the following categories</p>
            </div>;

        if(this.state.query && this.state.books && this.state.books.length > 0)
            results = <ol className="books-grid">
                {
                    this.state.books.map(b => <li key={b.id}><BookView book={b} onChangeBookShelf={this.props.onChangeBookShelf} /></li>)
                }
            </ol>;

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