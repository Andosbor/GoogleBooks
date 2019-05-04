import React from 'react';
import './styles.css';

function Saved() {
    return (
        <div className="savedBox">
            <h2>Saved Books</h2>
            <div className="savedBooks">
                <p>(Insert Saved Books here)</p>
                <button className="bookView">View</button>
                <button className="bookDelete">Delete</button>
            </div>
        </div>
    )
}

export default Saved;