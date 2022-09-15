import '../App.css'
import { Link } from 'react-router-dom';
import Book from './Book'

const Search = ({ booksFromSearch, changeShelf, handleInputChange, query, loadSearch }) => {
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title, author, or ISBN" onChange={(e) => handleInputChange(e.target.value)} value={query} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        loadSearch ? (booksFromSearch.map((book) => (<Book key={book.id} Book={book} onChangeShelf={changeShelf} />))) : (<h1>NO RESULTES FOR '{query}"</h1>)
                    }
                </ol>
            </div>
        </div>
    );

};

export default Search