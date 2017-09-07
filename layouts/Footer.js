import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link'
import _ from 'lodash'

import FormSearch from '../components/FormSearch'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeLanguage } from '../store'

class MyFooter extends Component {
  state = {  
    messages: {},
  }

  render() {
    const { messages } = this.props
    const routes = [
      {
        path: '/',
        name: messages['Home'],
      },
      {
        path: '/about',
        name: messages['About'],
      },
      {
        path: '/news',
        name: messages['News'],
      },
      {
        path: '/user',
        name: messages['Teacher&Nanny'],
      },
      {
        path: '/service',
        name: messages['Services&Pricing'],
      },
      {
        path: '/contact',
        name: messages['Contact'],
      },
    ]
    return (
      <div id="Footer">
        <div className="connect">
          <Container>
            <div className="text">GET START</div>
            <FormSearch/>
          </Container>
        </div>

        <div className="content">
          <Container>
            <Row>
              <Col xs="12" md="4">
                <h5>About Total</h5>
                <p>Small World Service Center</p>
                <p>Maid&Nancy</p>
                <p>Nursery</p>
                <p>Nursery</p>
                <p>Teacher@Home</p>
                
                <Button color="primary">VIEW</Button>
                <br/>
                <br/>
              </Col>
              <Col xs="12" md="4">
                <h5>Quick Links</h5>
                {_.map(routes, route =>
                  <Link perfect href={route.path}><a>{route.name}</a></Link>
                )}
                <a style={{cursor: 'pointer', float:'left', 'margin-right':'10px'}} onClick={() => this.props.changeLanguage('th')}>TH</a>
                <a style={{cursor: 'pointer', float:'left'}} onClick={() => this.props.changeLanguage('en')}>EN</a>
                <br/>
              </Col>
              <Col xs="12" md="4">
                <h5>Get Social</h5>
                <p>Contact</p>
                <p>Address: qwewqeqweqeqwe</p>
                <p>Email: qweqweqweqweq</p>
                <p>Tel: qweqweqwe</p>
                <br/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFooter)