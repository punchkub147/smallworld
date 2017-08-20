import React, { Component } from 'react'
import Layout from '../layouts'
import _ from 'lodash'
import Router from 'next/router'

import { Jumbotron, Container, Row, Col } from 'reactstrap';

import FormSearch from '../components/FormSearch'

import PageName from '../components/PageName'
import UserCard from '../components/UserCard';
import { getData } from '../api/firebase';

const queryUsers = (users, query) => {
  const result = users
  return result
}

export default class extends Component {

  state = {
    users: {},
    query: {},
  }

  componentDidMount = async () => {
    const { query } = this.props.url
    this.setState({
      query,
    })
    const users = await getData('users')
    this.setState({
      users,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { pathname, query } = nextProps.url
    this.setState({
      query,
    })
  }

  render(){
    const { users, query } = this.state
    const result = queryUsers(users, query)

    return(
      <Layout url={this.props.url}>
        <div id="User">
          <PageName text="SEARCH RESULT"/>
          <br/>
          <Container>
            <FormSearch/>
            <br/>
            <Row>
            {_.map(result, data => 
              <Col xs="12" sm="6" md="4" lg="3">
                <UserCard user={data}/>
              </Col>
            )}
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}