import React, { Component } from 'react';
import _ from 'lodash'
import styled from 'styled-components'
import { color } from '../static/styles'
import { loginWithEmail, register, getUser } from '../api/firebase'
import Router from 'next/router'

const ID = styled.div`

h1 {
    text-align: center;
    color: green;
    margin: 0;
    padding: 20px;
    margin-top: 50px;
}


.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}


`
    


class Admin extends Component {

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
      login: true,
    }
    componentDidMount = async () => {
      getUser(async user => {
        if(user){
          Router.push({
            pathname: '/',
          })
        }
      })
    }

    handleLogin = (e) => {
      e.preventDefault();
      loginWithEmail(this.state.email,this.state.password, error => {
        console.log(error)
        alert(error)
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
        alert(error)
      })
    }

    render() {
        return (
            <ID>
            <h1>Welcome to Small World Services Center</h1>
            <div className="login-page">
            <div className="form">
              <form className="register-form" onSubmit={this.handleRegister} style={{display: this.state.login?'none':'block'}}>
                <input type="text" placeholder="email"  onChange={(e) => this.setState({email: e.target.value})}/>
                <input type="password" placeholder="password"  onChange={(e) => this.setState({password: e.target.value})}/>
                <input type="password" placeholder="confirm password"  onChange={(e) => this.setState({password2: e.target.value})}/>
                <button onClick={this.handleRegister}>create</button>
                <p className="message">Already registered? <a href="#" onClick={() => this.setState({login: true})}>Sign In</a></p>
              </form>
              <form className="login-form" onSubmit={this.handleLogin} style={{display: this.state.login?'block':'none'}}>
                <input type="text" placeholder="username" onChange={(e) => this.setState({email: e.target.value})}/>
                <input type="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
                <button onClick={this.handleLogin}>login</button>
                <p className="message">Not registered? <a href="#" onClick={() => this.setState({login: false})}>Create an account</a></p>
              </form>
            </div>
          </div>
            
            </ID>
            
        );
    }
}

export default Admin;