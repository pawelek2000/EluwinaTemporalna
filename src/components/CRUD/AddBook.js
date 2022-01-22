import Axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class AddBook extends React.Component {
  state = {
    title: "",
    author: "",
    publisher: "",
    publication_date: "",
    count: 0
  }

  onTitleChange = event => {
    this.setState({ title: event.target.value });
  }
  
  onAuthorChange = event => {
    this.setState({ author: event.target.value });
  }

  onPublisherChange = event => {
    this.setState({ publisher: event.target.value });
  }

  onPublicationDateChange = event => {
    this.setState({ publication_date: event.target.value });
  }

  onCountChange = event => {
    this.setState({ count: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    
    Axios.post('http://localhost:3000/books', { 
      title: this.state.title, 
      author: this.state.author, 
      publisher: this.state.publisher, 
      publication_date: this.state.publication_date, 
      count: this.state.count 
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Nazwa książki</Label>
          <Input type="text" onChange={this.onTitleChange} placeholder="Nazwa książki" required></Input>
          <br/>

          <Label>Autor</Label>
          <Input type="text" onChange={this.onAuthorChange} placeholder="Autor" required></Input>
          <br/>

          <Label>Wydawca</Label>
          <Input type="text" onChange={this.onPublisherChange} placeholder="Wydawca" required></Input>
          <br/>

          <Label>Data publikacji</Label>
          <Input type="text" onChange={this.onPublicationDateChange} placeholder="Data publikacji" required></Input>
          <br/>

          <Label>Nakład</Label>
          <Input type="text" onChange={this.onCountChange} placeholder="Nakład" required></Input>
          <br/>
        </FormGroup>
        
        <Button type="submit">Zatwierdź</Button>
        <Link to="/" className="btn btn-danger ml-2">Powrót</Link>
      </Form>
    )
  }
}