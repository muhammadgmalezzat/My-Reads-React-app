import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import * as BookAPI from './utils/BooksAPI'

import Search from "./components/Search";    
import Home from './components/Home'

function App() {

  //const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  //const [searchBooks, setsearchBooks] = useState([]);
  
  useEffect(() => {
    //in callback function we can make up our API call
    // here our goal in to get all books and set books in out state 
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooks(res);
    };
    getBooks();
    
  }, [])

const changeShelf = async (book, shelf) => {
  await BookAPI.update(book, shelf);
  await BookAPI.getAll().then((res) => {
    setBooks(res);
  });
};


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home booksFromApi={books } changeShelf={changeShelf}/>} />
          <Route path='/search' element={<Search />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
