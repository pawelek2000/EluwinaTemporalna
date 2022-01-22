import Axios from 'axios';
import React from 'react';

import { Navigate } from 'react-router-dom';

export default class DeleteBook extends React.Component {
  state = {}

  componentDidMount() {
    const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    Axios.delete('http://localhost:3000/books/' + id);
  }

  render() {
    return (
      <Navigate to="/" />
    )
  }
}