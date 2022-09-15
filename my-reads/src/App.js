import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import * as BookAPI from './utils/BooksAPI'
import Search from "./components/Search";    
import Home from './components/Home'

function App() {

  const [loadSearch, setloadSearch] = useState(false);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setsearchBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [])

  const handleBooksSearch = async (search) => {
    await BookAPI.search(search).then((res) => {
      if (res && !res.error) {
        res.map((element) => {
          return books.forEach((item) => {
            if (element.id === item.id) element.shelf = item.shelf ;
          });
        });
        setsearchBooks(res);
        setloadSearch(true);
      } else {
        setsearchBooks([]);
        setloadSearch(false);
      }
      
    })
  };

  const handleInputChange = async (query) => {
    await setQuery(query.trim());
    await handleBooksSearch(query);
  };

  const changeShelf = async (book, shelf) => {
    await BookAPI.update(book, shelf);
    await BookAPI.getAll().then((res) => {
      setBooks(res);
    });
    handleBooksSearch(query);
  };
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path='/'
            element={<Home
              booksFromApi={books}
              changeShelf={changeShelf}
            />}
          />
          <Route
            path='/search'
            element={<Search
              booksFromApi={books}
              changeShelf={changeShelf}
              booksFromSearch={searchBooks}
              handleInputChange={handleInputChange}
              query={query}
              loadSearch={loadSearch }
            />}
          />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
