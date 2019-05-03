import React from 'react';
import './styles.css';

function Search() {
    return (
        <div className="searchBox">
            <h3>Book Search</h3>
            <p>Book</p>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Search</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
             </div>
        </div>
    )
}

export default Search;