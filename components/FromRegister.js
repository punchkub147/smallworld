import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {
  getUser,
  register,
  loginWithFacebook,
} from '../api/firebase'

class FromRegister extends Component {
  state = { 
    user: {},
    email: '',
    password: '',
    password2: '',
    day: '',
    month: '',
    year: '',
    sex: '',
  }

  componentDidMount() {
    getUser(user => {
      this.setState({
        user,
      })
    })
  }

  handleFackbook = async () => {
    loginWithFacebook(error => {
      console.log(error)
    })
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const { email, password, password2, day, month, year, sex } = this.state
    if(password === password2){
      const birthday = year /////////////////////
      const user = {
        email,
        detail: {
          sex,
          birthday,
        }
      }
      await register(email, password, user, error => {
        console.log(error)
      })
    }else{
      console.log('PASSWORD ERROR')
    }
  }

  render() {
    return (
      <div id="FromRegister">
        <Button color="primary" size="lg" block onClick={this.handleFackbook}>Facebook</Button>
        
        <br/>

        <div className="title">
          ลงทะเบียนด้วย Email ของคุณ
        </div>
        <Form onSubmit={this.handleRegister}>
          <FormGroup>
            <Input type="email" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Confirm Password" onChange={(e) => this.setState({password2: e.target.value})} />
          </FormGroup>

          <Label>วันเกิด</Label>
          <div className="row">
            <div className="col-md-3">
              <FormGroup>
                <Input type="text" placeholder="วัน" onChange={(e) => this.setState({day: e.target.value})} />
              </FormGroup>
            </div>
            <div className="col-md-5">
              <FormGroup>
                <Input type="select" name="select" onChange={(e) => this.setState({month: e.target.value})}>
                  <option>เดือน</option>
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
          
          <Label>เพศ</Label>
          <FormGroup>
          <label className="custom-control custom-radio" onClick={(e) => this.setState({sex: 'male'})} >
            <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">ชาย</span>
          </label>
          <label className="custom-control custom-radio" onClick={(e) => this.setState({sex: 'female'})} >
            <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">หญิง</span>
          </label>
          </FormGroup>
          <br/>
          <Button color="primary" size="lg" block onSubmit={this.handleRegister}>ลงทะเบียน</Button>
        </Form>

      </div>
    );
  }
}

export default FromRegister;