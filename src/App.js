import React from 'react'

import MainPage from './components/MainPage.js';
import SearchPage from './components/SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

    moveShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);

      // Check video at 1:34:00 (embed this in another method - this is to save time)
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

  render() {
    /*console.log(this.state.books);*/
    return (
      <div className="app" >
        {this.state.showSearchPage === false && (
        <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      )}
        {this.state.showSearchPage === true && (
        <SearchPage
          moveShelf={this.moveShelf}
        />
        )}
      </div>
    )
  }
}

export default BooksApp
