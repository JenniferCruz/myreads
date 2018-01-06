import React from 'react'
import BookShelf from './BookShelf'
import ReactSimpleTabs from "react-simpletabs";

function ShelvesListing(props) {
    const {books, onChangeBookShelf} = props;

    const Tabs = ReactSimpleTabs;

    return (<div className="list-books-container">
        <div className='app-name'>
            <h1>MyReads</h1>
        </div>
        <Tabs tabActive={1} onBeforeChange={()=>{}} onAfterChange={()=>{}}>
            <Tabs.Panel title='Currently Reading'>
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'currentlyReading')}/>
            </Tabs.Panel>
            <Tabs.Panel title='Want To Read'>
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'wantToRead')}/>
            </Tabs.Panel>
            <Tabs.Panel title='Read'>
                <BookShelf onChangeBookShelf={onChangeBookShelf}
                           books={books.filter(book => book.shelf === 'read')}/>
            </Tabs.Panel>
        </Tabs>
    </div>);
}

export default ShelvesListing;