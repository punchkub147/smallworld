import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Parallax } from 'react-parallax';
import FormSearch from './FormSearch'

export default class extends Component {
  render() {
    return (
      <div id="Banner">
        <Jumbotron style={{background: 'none'}}>
          <h1 className="display-3">Small World</h1>
          <h2 className="display-3"><span className="border">Service Center</span></h2>
          <br/>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>

          <FormSearch/>

        </Jumbotron>
      </div>
    );
  }
}
