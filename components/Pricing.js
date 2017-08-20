import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBlock, Button } from 'reactstrap';

export default class extends Component {
  render() {
  return (
      <div id="Pricing">
        <Container>
          <h1>SERVICE & PRICING</h1>
          <br/>
          <h3>Service & Pricing</h3>
          <br/>
          <br/>
          <Row>
            <Col xs="12" md="4">
              <Card className="PricingCard">
                <div className="title">Maid</div>
                <CardBlock>
                  <div className="detail">
                    <p>- Cleaning</p>
                    <p>- Cooking</p>
                    <p>- sadasdad</p>
                    <p>- asdasdad</p>
                  </div>
                  <hr/>
                  <div className="price">
                    Start 16,000฿ per month
                  </div>
                  <hr/>
                  <Button color="primary">Button</Button>
                </CardBlock>
              </Card>
            </Col>
            
            <Col xs="12" md="4">
              <Card className="PricingCard">
                <div className="title">Nursery</div>
                <CardBlock>
                  <div className="detail">
                    <p>- Baby Care</p>
                    <p>- Cooking</p>
                    <p>- sadasdad</p>
                    <p>- asdasdad</p>
                  </div>
                  <hr/>
                  <div className="price">
                    Start 16,000฿ per month
                  </div>
                  <hr/>
                  <Button color="primary">Button</Button>
                </CardBlock>
              </Card>
            </Col>

            <Col xs="12" md="4">
              <Card className="PricingCard">
                <div className="title">Teacher@Home</div>
                <CardBlock>
                  <div className="detail">
                    <p>- Teach Enlish</p>
                    <p>- Cooking</p>
                    <p>- sadasdad</p>
                    <p>- asdasdad</p>
                  </div>
                  <hr/>
                  <div className="price">
                    Start 16,000฿ per month
                  </div>
                  <hr/>
                  <Button color="primary">Button</Button>
                </CardBlock>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}
