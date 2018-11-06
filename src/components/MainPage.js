import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';


class MainPage extends React.Component {
  render() {
    return  (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")} updateShelf={this.props.updateShelf} />
            <BookShelf title="Want to Read" books={this.props.books.filter(book => book.shelf === "wantToRead")} updateShelf={this.props.updateShelf} />
            <BookShelf title="Read" books={this.props.books.filter(book => book.shelf === "read")} updateShelf={this.props.updateShelf} />
          </div>
        </div>

        <div className="open-search">
          <Link
          to='/search'
          className='add-book'
          onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
