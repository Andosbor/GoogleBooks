import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  state = {
    search: "",
    results: []
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };
  
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
          <div className="container">
            <Header />
            <Search 
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
            <Results results={this.state.results}/>
            <Book />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
