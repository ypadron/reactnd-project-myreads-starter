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
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}/>
        <Route path='/search' component={() => (
          <SearchPage
            moveShelf={this.moveShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
