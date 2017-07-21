import React, { Component } from 'react';
import hayter from '../../assets/img/hayter.png';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h1>404</h1>
            <h2>Looks like you're lost.</h2>
          </div>
          <div className="col">
            <img src={hayter} alt="Page not found!" />
          </div>
        </div>
      </div>
    );
  }
}
