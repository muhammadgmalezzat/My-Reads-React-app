import React from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'

const Home = ({booksFromApi,changeShelf}) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf sectionName={"Currently Reading"} booksFromHome={booksFromApi} shelfName="currentlyReading" changeShelf={changeShelf} />
                    <BookShelf sectionName={"Want to Read" } booksFromHome={booksFromApi}  shelfName="wantToRead" changeShelf={changeShelf} />
                    <BookShelf sectionName={"Read" } booksFromHome={booksFromApi}  shelfName="read" changeShelf={changeShelf} />
                    
                </div>
            </div>
            <div className="open-search">
                <Link className='open-search-link' to="/search">Add a book</Link>
            </div>
        </div>
    );
};

export default Home