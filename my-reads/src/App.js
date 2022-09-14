import "./App.css";
//import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route ,Routes } from 'react-router-dom';
import Search from "./components/Search";    
import Home from './components/Home'
function App() {
  //const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    
      <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        </div>
    </Router>

    
  );
}

export default App;
