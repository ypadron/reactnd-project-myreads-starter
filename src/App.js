import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage.js';
import SearchPage from './components/SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  };

  componentDidMount() {
      this.getBooks()
    }

  getBooks() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  };

  render() {
    return (
      <div className="app" >
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )}/>
        <Route path='/search' component={() => (
          <SearchPage
            updateShelf={this.updateShelf}
            books={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp
