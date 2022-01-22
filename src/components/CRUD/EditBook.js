import Axios from 'axios';
import React from 'react';

import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class EditBook extends React.Component {
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

    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    Axios.put('http://localhost:3000/books/' + id, { 
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
          <Input type="text" onChange={this.onTitleChange} value={this.state.title} required></Input>
          <br/>

          <Label>Autor</Label>
          <Input type="text" onChange={this.onAuthorChange} value={this.state.author} required></Input>
          <br/>

          <Label>Wydawca</Label>
          <Input type="text" onChange={this.onPublisherChange} value={this.state.publisher} required></Input>
          <br/>

          <Label>Data publikacji</Label>
          <Input type="text" onChange={this.onPublicationDateChange} value={this.state.publication_date} required></Input>
          <br/>

          <Label>Nakład</Label>
          <Input type="text" onChange={this.onCountChange} value={this.state.count} required></Input>
          <br/>
        </FormGroup>
        
        <Button type="submit">Zatwierdź</Button>
        <Link to="/" className="btn btn-danger ml-2">Powrót</Link>
      </Form>
    )
  }
}