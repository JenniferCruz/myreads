import React from 'react';

function MessageNotFound(props) {
    return !props.searchQuery?
        (<div></div>) :
        (<div className='search-no-results'>
                <h2>No results for {props.searchQuery}</h2>
                <p>
                    The term you entered did not bring up any results.
                    Try using looking for something within the following categories
                </p>
                <p className='highlight-paragraph'>
                    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball',
                    'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
                    'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing',
                    'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First',
                    'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
                    'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage',
                    'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
                    'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire',
                    'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy',
                    'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                </p>
            </div>);
}

export default MessageNotFound;