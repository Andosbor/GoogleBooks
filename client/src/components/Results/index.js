import React from 'react';
import './styles.css';

function Results() {
    return (
        <div className="resultsBox">
            <h2>Results</h2>
            <div className="bookBox">
                <p>(Insert results here)</p>
                <button className="bookView">View</button>
                <button className="bookDelete">Delete</button>
            </div>
        </div>
    )
}

export default Results;