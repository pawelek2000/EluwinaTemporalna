import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {Details} from './components/Details';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "80rem", margin: "4rem auto" }}>
      <Router>
          <Routes >
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/add" element={<AddUser/>}/> 
            <Route exact path="/edit/:id" element={<EditUser/>} />
            <Route exact path="/details/:id" element={<Details/>} />
          </Routes >
        </Router>
    </div>
  );
}

export default App;
