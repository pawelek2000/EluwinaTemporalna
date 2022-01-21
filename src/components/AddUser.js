import React from 'react';
import { Link} from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
export const AddUser = () => {
  return (
    <Form>
    <FormGroup>
      <Label>Nazwa książki</Label>
      <Input type="text" placeholder="Nazwa książki" required></Input>
      <Label>Autor</Label>
      <Input type="text" placeholder="Autor" required></Input>
      <Label>Wydawca</Label>
      <Input type="text" placeholder="Wydawca" required></Input>
      <Label>Data publikacji</Label>
      <Input type="text" placeholder="Data publikacji" required></Input>
      <Label>Nakład</Label>
      <Input type="text" placeholder="Nakład" required></Input>
    </FormGroup>
    <Button type="submit">Zatwierdź</Button>
    <Link to="/" className="btn btn-danger ml-2">Anuluj</Link>
  </Form>
  )
};
