import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Book from "../../components/Book";
import Header from "../../components/Header";
import Saved from "../../components/Saved";
import "./styles.css";

class SavedBooks extends Component {

  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
          <div className="container">
            <Header />
            <Saved />
            <Book />
            
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;
