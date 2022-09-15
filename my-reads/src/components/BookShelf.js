import React from 'react'
import Book from './Book'
import PropTypes from "prop-types";

const BookShelf = ({sectionName,booksFromHome,shelfName,changeShelf}) => {
    const filteredBooks = booksFromHome.filter((book) => book.shelf === shelfName)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{sectionName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                { filteredBooks.map((book) => <li><Book key={book.id} Book={book } onChangeShelf={changeShelf} /></li> )  }
                </ol>
            </div>
        </div>
    );
}


BookShelf.propTypes = {
    sectionName: PropTypes.string.isRequired,
    booksFromHome: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired,
};
export default BookShelf;