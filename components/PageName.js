import React, { Component } from 'react';

import styled from 'styled-components'
import { color } from '../static/styles'

import { Container } from 'reactstrap'

class PageName extends Component {
  state = {  }
  render() {
    return (
      <ID>
        <Container>
          <p><span className="border">{this.props.text}</span></p>
        </Container>
      </ID>
    );
  }
}

export default PageName;

const ID = styled.div`
  padding: 20px 0;
  border-bottom: 10px solid ${color.main2};
  background-color: ${color.main};
  color:white;
  p{
    font-size: 40px;
    font-weight: bold;
    .border{
      border-bottom: 5px solid ${color.sub};
    }
  }
`;