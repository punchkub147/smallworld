import React, { Component } from 'react';
import _ from 'lodash'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {
  logout,
  loginWithEmail,
  loginWithFacebook,
} from '../api/firebase'

class FromLogin extends Component {
  state = { 
    email: '',
    password: '',
  }

  handleFackbook = async () => {
    loginWithFacebook(error => {
      console.log(error)
    })
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state
    loginWithEmail(email, password, error => {
      console.log(error)
    })
  }

  handleLogout = async () => {
    logout(error => {
      console.log(error)
    })
  }

  render() {
    const { user } = this.props
    return (
      <div id="FromLogin">
      {_.isEmpty(user) ?
        <div>
          <Button color="primary" size="lg" block onClick={this.handleFackbook}>Facebook</Button>
          <br/>
          <div className="title">
            เข้าสู่ระบบ
          </div>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Input type="email" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
            </FormGroup>
            <br/>
            <Button color="primary" size="lg" block onSubmit={this.handleLogin}>Sign In</Button>
          </Form>
        </div>
        :
        <Button color="primary" size="lg" block onClick={this.handleLogout}>Sign Out</Button>
      }
      </div>
    );
  }
}

export default FromLogin;