import React from 'react'

import MainPage from './components/MainPage.js';
import SearchPage from './components/SearchPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

  render() {
    /*console.log(this.state.books);*/
    return (
      <div className="app" >
        <MainPage
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
