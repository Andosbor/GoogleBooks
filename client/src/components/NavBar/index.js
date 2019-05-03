import React from 'react';
import './styles.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div class = "row">
                    <div class = "col-12">
                        <span className="navbar-brand mb-0 h1">Google Books 
                        <a href="/"> Search </a>
                        <a href="/savedBooks">Saved</a>
                        </span>
                    
                    </div>
                </div>
                
                
            </nav>
        </div>
    )
}

export default NavBar;