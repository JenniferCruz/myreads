import React from 'react';

function BookShelfChanger(props) {
    const book = props.book;
    return (<div className="book-shelf-changer">
                <select value={book.shelf || 'none'} onChange={event => props.onChangeBookShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
    );
}

export default BookShelfChanger;
