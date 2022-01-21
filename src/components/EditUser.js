import React from 'react';
import { Link} from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = () => {
  return (
    <Form>
    <FormGroup>
      <Label>Name</Label>
      <Input type="text" placeholder="Nazwa książki" required></Input>
      <Input type="text" placeholder="Autor" required></Input>
      <Input type="text" placeholder="Wydawca" required></Input>
      <Input type="text" placeholder="Data publikacji" required></Input>
      <Input type="text" placeholder="Nakład" required></Input>
    </FormGroup>
    <Button type="submit">Zamień</Button>
    <Link to="/" className="btn btn-danger ml-2">Anuluj</Link>
  </Form>
  )
};
