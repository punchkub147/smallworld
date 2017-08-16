import React, { Component } from 'react'
import Layout from '../layouts'
import _ from 'lodash'
import FromLogin from '../components/FromLogin';

import {
  getUser,
} from '../api/firebase'

export default class User extends Component {

  state = {
    users: {}
  }

  componentDidMount() {
    getUser(user => {
      this.setState({
        user,
      })
    })
  }

  render(){
    const { users } = this.state
    return(
      <Layout>
        <div id="Login">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-5">
                <FromLogin user={user}/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}