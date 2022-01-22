import Axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/books')
      .then(res => {
        const books = res.data;
        this.setState({ books });
      }
    )
  }

  render() {
    return (
      <ListGroup className="mt-4">
        {
          this.state.books.length > 0 ? (
            <>
              {
                this.state.books.map(book => (
                  <ListGroupItem className="d-flex" >
                    <strong style={{ marginLeft: "1rem" }}>Tytuł: {book.title}</strong>
                    <strong style={{ marginLeft: "1rem" }}>Autor: {book.author}</strong>
                    
                    <div className="ml-auto">
                      <Link to={`/edit/${book.id}`} className="btn btn-warning mr-1">Edytuj</Link>
                      <Link to={`/details/${book.id}`} className="btn btn-warning mr-1">Szczegóły</Link>
                      <Link to={`/delete/${book.id}`} className="btn btn-danger mr-1">Usuń</Link>
                    </div>
                  </ListGroupItem>
                ))
              }
            </>
          ) : (
              <h4 className="text-center">No books in database</h4>
          )
        }
      </ListGroup>
    )
  }
}