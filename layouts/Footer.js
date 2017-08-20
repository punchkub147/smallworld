import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link'

export default class extends Component {
  state = {  }
  render() {
    return (
      <div id="Footer">
        <div className="connect">
          <Container>
            <div className="text">GET START</div>
            <Button color="primary">GET START >></Button>
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
                <p><Link perfect href="/">Home</Link></p>
                <p><Link perfect href="/about">About</Link></p>
                <p><Link perfect href="/user">Search</Link></p>
                <p><Link perfect href="/service">Service & Pricing</Link></p>
                <p><Link perfect href="/contact">Contact</Link></p>
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