import React from 'react'
import Book from './Book'

const BookShelf = ({sectionName,booksFromHome,shelfName,changeShelf}) => {
    //console.log("from bookshelf", { booksFromHome })
    const filteredBooks = booksFromHome.filter((book) => book.shelf === shelfName)
    //console.log("from bookshelf filteredBooks", { filteredBooks })
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

export default BookShelf;