import React from 'react';

import { Link} from "react-router-dom";
import {
  Form,
  FormGroup,
  Label
} from "reactstrap";

export const Details = () => {
  return (
      <Form>
        <FormGroup>
            <Label>Nazwa książki: </Label>
            <br/>
            <Label>Autor: </Label>
            <br/>
            <Label>Wydawca: </Label>
            <br/>
            <Label>Data publikacji: </Label>
            <br/>
            <Label>Nakład: </Label>
        </FormGroup>
        <Link to="/" className="btn btn-danger ml-2">Anuluj</Link>
      </Form>
  )
};
