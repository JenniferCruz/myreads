import React from 'react';
import BookShelf from './BookShelf';
import ReactSimpleTabs from 'react-simpletabs';
import { Link } from 'react-router-dom';

function ShelvesListing(props) {
    const {books, onChangeBookShelf} = props;

    const Tabs = ReactSimpleTabs;

    return (<div className="list-books-container">
        <div className="app-name">
            <h1>MyReads</h1>
        </div>
        <Tabs tabActive={1} onBeforeChange={()=>{}} onAfterChange={()=>{}}>
            <Tabs.Panel title="Currently Reading">
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'currentlyReading')}
                           messageOnEmptyShelf={
                               <div className="empty-shelf-message">
                                   <h3>You're not reading any book at the moment!</h3>
                                   <p>Why not check the books you want to read?</p>
                               </div>
                           }/>
            </Tabs.Panel>
            <Tabs.Panel title="Want To Read">
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'wantToRead')}
                           messageOnEmptyShelf={
                               <div className="empty-shelf-message">
                                   <h3>This shelf is empty</h3>
                                   <p>Go ahead and <Link to="/search">add some books</Link>!</p>
                               </div>
                           }/>
            </Tabs.Panel>
            <Tabs.Panel title="Read">
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'read')}
                           messageOnEmptyShelf={
                               <div className="empty-shelf-message">
                                   <h3>You haven't marked any book as read yet</h3>
                                   <p>Check your other shelfs or <Link to="/search">look up books you migh have read</Link>.</p>
                               </div>
                           }/>
            </Tabs.Panel>
        </Tabs>
    </div>);
}

export default ShelvesListing;