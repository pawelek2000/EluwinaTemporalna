import React from 'react';
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex" >
              <strong style={{ marginLeft: "1rem" }}>Tytuł: </strong>
              <strong style={{ marginLeft: "1rem" }}>Autor: </strong>
              <div className="ml-auto">
                <Link to="/edit/1" color="warning" className="btn btn-warning mr-1">Edytuj</Link>
                <Link to="/details/1" color="" className="btn btn-warning mr-1">Szczegóły</Link>
                <Button color="danger">Usuń</Button>
              </div>
        </ListGroupItem>
    </ListGroup>
  )
};
