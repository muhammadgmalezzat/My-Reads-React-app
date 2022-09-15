import React from 'react'

const Book = ({Book,onChangeShelf}) => {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: Book.imageLinks ? `url(${Book.imageLinks.smallThumbnail})` : "",
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={(e)=> {onChangeShelf(Book, e.target.value)}}  value={Book.shelf ? Book.shelf : "none"}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{Book.title}</div>
            <div className="book-authors">{Book.authors}</div>
        </div>
    );
}

export default Book