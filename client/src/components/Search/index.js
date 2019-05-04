import React from 'react';
import './styles.css';

function Search(props) {

    return (
        <div className="searchBox">
            <h3>Book Search</h3>
            <p>Book</p>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Search</label>
                <input
                    type="text"
                    className="form-control"
                    id="bookInput"
                    placeholder="Garfield 2: A Tail of Two Kitties"
                    onChange={props.handleInputChange}
                    value={props.search}
                    
                />
                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
             </div>
        </div>
    )
}

export default Search;