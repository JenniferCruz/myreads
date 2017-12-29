import React from 'react'

class BookShelfChanger extends React.Component {

    render() {
        return (<div className="book-shelf-changer">
                <select onChange={event => {this.props.onChangeBookShelf(this.props.book, event.target.value)}}>
                    <option value="none" disabled>Move to...</option>
                    <option value="reading">Currently Reading</option>
                    <option value="want">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;
