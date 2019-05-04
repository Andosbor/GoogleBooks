import React from 'react';
import BookDetails from '../BookDetails';
import './styles.css';

function Results(props) {
    if (props.results.length > 0) {
        console.log(props.results[8].volumeInfo.hasOwnProperty('imageLinks'));
      }
    return (
        <div className="searchBox">
            <h3>Book Results</h3>
            <ul>
            {props.results.map(result => (
                <BookDetails
                className="BookDetailst-group-item"
                key={result.id}
                title={result.volumeInfo.title}
                subtitle={result.volumeInfo.subtitle}
                authors={result.volumeInfo.hasOwnProperty('authors') ? result.volumeInfo.authors : []}
                image={result.volumeInfo.hasOwnProperty('imageLinks') ? result.volumeInfo.imageLinks.smallThumbnail : ""}
                description={result.volumeInfo.description}
            />
      ))}
         </ul> 
    </div>                    
    )
}

export default Results;
