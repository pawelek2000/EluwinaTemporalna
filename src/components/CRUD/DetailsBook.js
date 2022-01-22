import Axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class DetailsBook extends React.Component {
  state = {
    title: "",
    author: "",
    publisher: "",
    publication_date: "",
    count: 0
  }

  componentDidMount() {
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    Axios.get('http://localhost:3000/books/' + id)
      .then(res => {
        const book = res.data;

        this.setState({     
          title: book.title,
          author: book.author,
          publisher: book.publisher,
          publication_date: book.publication_date,
          count: book.count
        });
      }
    )
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Nazwa książki</Label>
          <Input type="text" value={this.state.title} disabled></Input>
          <br/>

          <Label>Autor</Label>
          <Input type="text" value={this.state.author} disabled></Input>
          <br/>

          <Label>Wydawca</Label>
          <Input type="text" value={this.state.publisher} disabled></Input>
          <br/>

          <Label>Data publikacji</Label>
          <Input type="text" value={this.state.publication_date} disabled></Input>
          <br/>

          <Label>Nakład</Label>
          <Input type="text" value={this.state.count} disabled></Input>
          <br/>
        </FormGroup>
        
        <Link to="/" className="btn btn-danger">Powrót</Link>
      </Form>
    )
  }
}