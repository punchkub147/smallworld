import React, { Component } from 'react'
import Layout from '../layouts'
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';

import GoogleMap from 'google-map-react';
import PageName from '../components/PageName'

import { contact } from '../api/sendEmail';

export default class extends Component {

  state = {
    displayName: '',
    email: '',
    subject: '',
    message: '',
  }

  handleContact = (e) => {
    e.preventDefault();
    contact()
  }

  render(){
    return(
      <Layout url={this.props.url}>
        <PageName text="CONTACT US"/>
        <div id="Contact">
          <Row className="head" style={{margin: 0}}>
            <Col xs="12" md="4">
              <Row>
                <Col xs="12" md="6">
                  <div className="icon">
                    <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className="text">Open Time 10:00-18:00</div>
                </Col>
              </Row>
            </Col>
            <br/>
            <Col xs="12" md="4">
              <Row>
                <Col xs="12" md="6">
                  <div className="icon">
                    <i className="fa fa-home fa-5x" aria-hidden="true"></i>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className="text">Address</div>
                </Col>
              </Row>
            </Col>
            <br/>
            <Col xs="12" md="4">
              <Row>
                <Col xs="12" md="6">
                  <div className="icon">
                    <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className="text">Email</div>
                </Col>
              </Row>
            </Col>

          </Row>
          <br/><br/><br/>
          <Container>
            <h1>Contact Us</h1>
            <hr/>
            <Row>
              <Col xs="12" sm="12" md="7">
                <Form onSubmit={this.handleContact}>
                  <FormGroup>
                    <Input type="text" placeholder="Your name" onChange={(e) => this.setState({displayName: e.target.value})} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" placeholder="Your E-mail" onChange={(e) => this.setState({email: e.target.value})} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="Subject" onChange={(e) => this.setState({subject: e.target.value})} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" placeholder="Message" 
                      style={{height: '150px'}}
                      onChange={(e) => this.setState({message: e.target.value})} />
                  </FormGroup>
                  <Button color="primary" size="lg" block onSubmit={this.handleContact}>Contact</Button>
                </Form>
                <br/>
              </Col>
              <Col xs="12" sm="12" md="5">
                <h3>Before Sending a message</h3>
                <p>qweqweqwewqewqewqqwewqe
                qweqweqweqweqweqweqwe qe qwe qwe qwe qwqeqwe</p>
                <br/>
                <br/>
                <br/>
                <p>qweqweqwewqewqewqee</p>
              </Col>
            </Row>
            <hr/>
            <h1>Map</h1>
            <br/>
            <Row>
              <Col xs="12">
                <GoogleMap style={{'min-height': '300px'}}
                  defaultCenter={{lat: 59.938043, lng: 30.337157}}
                  defaultZoom={7}>
                  <div lat={59.938043} lng={30.337157}></div>
                </GoogleMap>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}