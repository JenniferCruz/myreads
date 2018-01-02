import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import AppHeader from "./components/AppHeader";
import ShelfsListing from "./components/ShelfsListing";
import SearchView from "./components/search/SearchView";
import * as BooksAPI from "./BooksAPI";
import * as Books from './Book'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
          books: []
    };

    updateBook = (book, newShelf) => {
        const updatedBooks = this._updateBookShelf(book, newShelf);
        this.setState({books: updatedBooks});
        BooksAPI.update(book, newShelf);
    };

    _updateBookShelf = (book, newShelf) => {
        let books = this.state.books;
        const i = books.findIndex(b => b.id === book.id);
        if (i >= 0)
            books[i].shelf = newShelf;
        else {
            book.shelf = newShelf;
            books = books.concat([book]);
        }
        return books;
    };

    componentDidMount() {
        BooksAPI.getAll().then(
            books => this.setState({ books: Books.getBooks(books)})
        );
    }

    render() {
        const books = this.state.books;

        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path='/' render={() => (
                        <div className="list-books">
                            <AppHeader/>
                            <ShelfsListing onChangeBookShelf={this.updateBook} books={books}/>
                            <div className="open-search">
                                <Link to='/search'>Add book</Link>
                            </div>
                        </div>
                    )}/>

                    <Route path='/search' render={() => (
                        <SearchView app={this} onChangeBookShelf={this.updateBook} />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
