import React, { Component } from 'react'
import Layout from '../layouts'
import _ from 'lodash'

import UserCard from '../components/UserCard';
import { getData } from '../api/firebase';

export default class User extends Component {

  state = {
    users: []
  }

  componentDidMount = async () => {
    const users = await getData('users')
    console.log('fetchuser',users)
    this.setState({
      users
    })
  }

  render(){
    const { users } = this.state
    return(
      <Layout>
        <div id="User">
          <div className="container">
            <div className="row">
            {_.map(users, data => 
              <div className="col-md-3">
                <UserCard user={data}/>
              </div>
            )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}