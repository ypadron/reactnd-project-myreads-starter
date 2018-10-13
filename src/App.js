import React from 'react'

import MainPage from './components/MainPage.js';
import SearchPage from './components/SearchPage.js';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app" >
        <MainPage />
      </div>
    )
  }
}

export default BooksApp
