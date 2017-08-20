import React, { Component } from 'react';
import { Container } from 'reactstrap'

class PageName extends Component {
  state = {  }
  render() {
    return (
      <div id="PageName">
        <Container>
          <p><span className="border">{this.props.text}</span></p>
        </Container>
      </div>
    );
  }
}

export default PageName;