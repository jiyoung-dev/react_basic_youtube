import React, { Component } from 'react';

class Search extends Component {

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="navbar">
                <i className="navbar-logo"></i>
                <span>YouTube</span>
                <form className="search-form" onSubmit={this.onSubmit}>
                    <input type="text" className="search-input" placeholder='Search...'/>
                    <button className="search-button">search</button>
                </form>
            </div>
        );
    }
}

export default Search;