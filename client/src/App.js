import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
import Header from "./components/Header";
import Search from "./components/Search";
import SavedBooks from "./components/SavedBooks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
          <div className="container">
            <Header />
            <Search />
            <Book />
            <SavedBooks />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
