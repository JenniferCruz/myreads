import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'
import AppHeader from "./components/AppHeader";
import ShelvesListing from "./components/ShelvesListing";
import SearchView from "./components/search/SearchView";
import * as BooksAPI from "./BooksAPI";
import * as Books from './Book'

class BooksApp extends React.Component {

    state = {
          books: []
    };

    updateBook = (book, newShelf) => {
        const updatedBooks = this.updateBookShelf(book, newShelf);
        this.setState({books: updatedBooks});
        BooksAPI.update(book, newShelf);
    };

    /* returns an array containing all user's books,
    in which 'book' is assigned to its 'newShelf' */
    updateBookShelf = (book, newShelf) => {
        let books = this.state.books;
        const i = books.findIndex(b => b.id === book.id);
        book.shelf = newShelf;
        if (i >= 0)
            books[i] = book;
        else
            books = books.concat([book]);
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
                            <ShelvesListing onChangeBookShelf={this.updateBook} books={books}/>
                            <div className="open-search">
                                <Link to='/search'>Add book</Link>
                            </div>
                        </div>
                    )}/>

                    <Route path='/search' render={({ history }) => (
                        <SearchView app={this} onChangeBookShelf={(book, newShelf) => {
                            this.updateBook(book, newShelf);
                            if (window.location.pathname.includes('search'))
                                history.push('/');
                        }} />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
