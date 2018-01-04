import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
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

    /* returns true ff the book is added new to books, false otherwise */
    updateBook = (book, newShelf) => {
        const updatedBooks = this.updateBookShelf(book, newShelf);
        const isNewBook = updatedBooks.length !== this.state.books.length;
        this.setState({books: updatedBooks});
        BooksAPI.update(book, newShelf);
        return isNewBook;
    };

    /* returns an array containing all user's books,
    in which 'book' is assigned to its 'newShelf' */
    updateBookShelf = (book, newShelf) => {
        book.shelf = newShelf;
        let books = this.state.books;
        if (books.findIndex(b => b.id === book.id) < 0)
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
                            <ShelfsListing onChangeBookShelf={this.updateBook} books={books}/>
                            <div className="open-search">
                                <Link to='/search'>Add book</Link>
                            </div>
                        </div>
                    )}/>

                    <Route path='/search' render={({ history }) => (
                        <SearchView app={this} onChangeBookShelf={(book, newShelf) => {
                            const isNewBook = this.updateBook(book, newShelf);
                            if (isNewBook)
                                history.push('/');
                        }} />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
