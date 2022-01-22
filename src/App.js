import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddBook from './components/CRUD/AddBook';
import EditBook from './components/CRUD/EditBook';
import DeleteBook from './components/CRUD/DeleteBook';
import DetailsBook from './components/CRUD/DetailsBook';

function App() {
  return (
    <div style={{ maxWidth: "80rem", margin: "4rem auto" }}>
      <Router>
          <Routes >
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/add" element={<AddBook/>} />

            <Route exact path="/edit/:id" element={<EditBook/>} />
            <Route exact path="/delete/:id" element={<DeleteBook/>} />
            <Route exact path="/details/:id" element={<DetailsBook/>} />
          </Routes >
        </Router>
    </div>
  );
}

export default App;