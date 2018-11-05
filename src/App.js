import React from 'react'
import { Route } from 'react-router-dom'
import MainPage from './components/MainPage.js';
import SearchPage from './components/SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    showSearchPage: false,
    books: []
  }

//this.state.books = something - NEVER do this!!! Use set state instead
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }
/*
    setShelf = (book, shelf) => {
      return this.props.book.shelf === 'currentlyReading' ? 'currentlyReading'
        : this.props.book.shelf === 'wantToRead' ? 'wantToRead'
        : this.props.book.shelf === 'read' ? 'read'
        : this.props.book.shelf === 'none';
    }
*/

    updateShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);
      this.componentDidMount();
    };


  render() {
    console.log(this.state.books);
    return (
      <div className="app" >
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            // setShelf={this.setShelf}
            updateShelf={this.updateShelf}
          />
        )}/>
        <Route path='/search' component={() => (
          <SearchPage
            // setShelf={this.setShelf}
            updateShelf={this.updateShelf}
            books={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default BooksApp
