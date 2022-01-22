import React from 'react';
import BookList from './CRUD/List';

import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar className="justify-content-center" color="dark">
          <Link className="btn btn-primary" to="/add">Dodaj książkę</Link>
        </Navbar>
  
        <BookList />
      </>
    )
  }
}