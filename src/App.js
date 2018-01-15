import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import ShelvesListing from './components/ShelvesListing';
import SearchView from './components/search/SearchView';
import * as BooksAPI from './BooksAPI';
import * as Books from './Book';

class BooksApp extends React.Component {

    state = {
          books: {}
    };

    updateBook = (book, newShelf) => {
        let books = this.state.books;
        book.shelf = newShelf;
        books[book.id] = book;
        this.setState({books: books});
        BooksAPI.update(book, newShelf);
    };

    componentDidMount() {
        BooksAPI.getAll().then(
            books => this.setState({ books: Books.getBooksMap(books)})
        );
    }

    render() {
        const books = this.state.books;

        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={() => (
                        <div className="list-books">
                            <ShelvesListing onChangeBookShelf={this.updateBook} books={Object.values(books)}/>
                            <div className="open-search">
                                <Link to="/search">Add book</Link>
                            </div>
                        </div>
                    )}/>

                    <Route path="/search" render={({ history }) => (
                        <SearchView books={this.state.books} onChangeBookShelf={(book, newShelf) => {
                            this.updateBook(book, newShelf);
                        }} />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp;
