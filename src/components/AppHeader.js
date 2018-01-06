import React from 'react'

class AppHeader extends React.Component {
    render() {
        return (<div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <a className="navbar-brand" href="#">MyReads</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" data-target="#currently-reading-shelf" data-toggle="collapse" data-parent="#shelves-listing" >Currently Reading</a>
                        <a className="nav-item nav-link active" data-target="#want-to-read-shelf" data-toggle="collapse" data-parent="#shelves-listing" >Want To Read<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" data-target="#read-shelf" data-toggle="collapse" data-parent="#shelves-listing" >Read</a>
                    </div>
                </div>
            </nav>
        </div>);
    }
}

export default AppHeader;