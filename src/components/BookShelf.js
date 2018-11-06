import React from 'react';
import Book from './Book.js';


class BookShelf extends React.Component {
  render() {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelf={this.props.updateShelf}
                  currentShelf={book.shelf}
                  />
              </li>
            ))}
        </ol>
      </div>
    </div>
    );
  }
}

export default BookShelf;
