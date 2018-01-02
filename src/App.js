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

                    <Route path='/search' render={({ history }) => (
                        <SearchView app={this} onChangeBookShelf={(book, newShelf) => {
                            this.updateBook(book, newShelf);
                            history.push('/'); // TODO: do this only if book is actually new - refactor to have 2 diff functions for add/edit
                        }} />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
