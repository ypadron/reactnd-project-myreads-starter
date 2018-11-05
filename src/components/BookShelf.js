import React, {Component} from 'react';
import Book from './Book.js';

// import * as BooksAPI from '../BooksAPI'

class BookShelf extends React.Component {
  render() {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            this.props.books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    // setShelf={this.props.setShelf}
                    updateShelf={this.updateShelf}
                    currentShelf={book.shelf}
                    />
                </li>
              ))
          }
        </ol>
      </div>
    </div>
    );
  }
}

export default BookShelf;
