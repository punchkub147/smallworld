import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';
import Router from 'next/router'

import {
  register,
  loginWithFacebook,
} from '../api/firebase'

class FormRegister extends Component {
  state = { 
    user: {},
    displayName: '',
    email: '',
    password: '',
    password2: '',
    day: '',
    month: '',
    year: '',
    gender: '',
  }

  handleFackbook = async () => {
    loginWithFacebook(error => {
      console.log(error)
    })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const { password, password2 } = this.state
    if(password === password2){
      this.doRegister()
    }else{
      console.log('PASSWORD ERROR')
    }
  }

  doRegister = async () => {
    const { displayName, email, password, password2, day, month, year, gender } = this.state
    const birthday = year /////////////////////
    const user = {
      displayName,
      email,
      detail: {
        gender,
        birthday,
      }
    }
    await register(email, password, user, error => {
      console.log(error)
    })
    Router.push({
      pathname: '/about',
    })
  }

  render() {
    return (
      <div id="FormRegister"  >
        <h1>Join To Small World</h1>
        <Form onSubmit={this.handleRegister}>
          <FormGroup>
            <Input type="email" placeholder="E-mail" state="danger" onChange={(e) => this.setState({email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Confirm Password" onChange={(e) => this.setState({password2: e.target.value})} />
          </FormGroup>
          <hr/>
          <FormGroup>
            <Input type="text" placeholder="Display Name" onChange={(e) => this.setState({displayName: e.target.value})} />
          </FormGroup>

          <Label>Birthday</Label>
          <div className="row no-gutters">
            <div className="col-md-3">
              <FormGroup>
                <Input type="text" placeholder="วัน" onChange={(e) => this.setState({day: e.target.value})} />
              </FormGroup>
            </div>
            <div className="col-md-5">
              <FormGroup>
                <Input type="select" name="select" onChange={(e) => this.setState({month: e.target.value})}>
                  <option>Month</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Input>
              </FormGroup>
            </div>
            <div className="col-md-4">
              <FormGroup>
                <Input type="text" placeholder="ปี" onChange={(e) => this.setState({year: e.target.value})} />
              </FormGroup>
            </div>
          </div>
          
          <Label>Gender</Label>
          <FormGroup>
          <label className="custom-control custom-radio" onClick={(e) => this.setState({gender: 'male'})} >
            <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">Male</span>
          </label>
          <label className="custom-control custom-radio" onClick={(e) => this.setState({gender: 'female'})} >
            <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">Female</span>
          </label>
          </FormGroup>
          <Button color="primary" size="lg" block onSubmit={this.handleRegister}>Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default FormRegister;