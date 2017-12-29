import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import AppHeader from "./components/AppHeader";
import SearchView from "./components/SearchView";
import BookShelf from './components/BookShelf'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };

  updateBookShelf = (book, newShelf) => {
      let books = this.state.books;
      const i = books.findIndex(b => b.id === book.id);
      books[i].shelf = newShelf;
      this.setState({books: books});
  };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books.map(book => { return {
                id: book.id,
                shelf: book.shelf,
                image: `url("${book.imageLinks.thumbnail}")`,
                title: book.title,
                author: this._getAuthorsString(book.authors)
            }}) });
        });
    }

    _getAuthorsString = authors => {
        const rawString = `${authors.reduce((authorsString, currentAuthor) => authorsString + ", " + currentAuthor)}`;
        const lastComma = rawString.lastIndexOf(',');
        return lastComma === -1 ? rawString :
            rawString.substring(0, lastComma-1) + ' & ' + rawString.substring(lastComma+2);
    };

    render() {
      const books = this.state.books;

      return (
          <div className="app">
            {this.state.showSearchPage ? (
              <SearchView app={this}/>
            ) : (
              <div className="list-books">
                <AppHeader/>
                <div className="list-books-content">
                  <div>
                      <BookShelf onChangeBookShelf={this.updateBookShelf} title='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')}/>
                      <BookShelf onChangeBookShelf={this.updateBookShelf} title='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')}/>
                      <BookShelf onChangeBookShelf={this.updateBookShelf} title='Read' books={books.filter(book => book.shelf === 'read')}/>
                  </div>
                </div>
                <div className="open-search">
                  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
            )}
          </div>
    )
  }
}

export default BooksApp
