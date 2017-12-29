import React from 'react';

function MessageNotFound(props) {
    return !props.searchQuery?
        (<div></div>) :
        (<div className='search-no-results'>
                <h2>No results for {props.searchQuery}</h2>
                <p>The term you entered did not bring up any results. Try using looking for something within the following categories</p>
            </div>);
}

export default MessageNotFound;