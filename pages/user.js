import React, { Component } from 'react'
import Layout from '../layouts'
import _ from 'lodash'
import Router from 'next/router'

import { color } from '../static/styles'
import styled from 'styled-components'

import { Jumbotron, Container, Row, Col } from 'reactstrap';

import FormSearch from '../components/FormSearch'

import PageName from '../components/PageName'
import UserCard from '../components/UserCard';
import { getData } from '../api/firebase';

//////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

const queryUsers = async (users, query) => {
  const q = {
    salary: query.salary?query.salary:'All',
    ageRange: query.ageRange?query.ageRange:'All',
    nationality: query.nationality?query.nationality:'All',
    location: query.location?query.location:'All',
    position: query.position?query.position:'All',
    workTime: query.workTime?query.workTime:'All',
  }
  const result = await _.filter(users, user => {    
    //salary
    let passSalary = false
    if(q.salary === 'All')passSalary = true
    if(q.salary === '0 - 10,000')if(_.get(user, 'salary.price') >= 0 && _.get(user, 'salary.price') <= 10000)passSalary = true
    if(q.salary === '10,000 - 20,000')if(_.get(user, 'salary.price') >= 10000 && _.get(user, 'salary.price') <= 20000)passSalary = true
    if(q.salary === '20,000 - 30,000')if(_.get(user, 'salary.price') >= 20000 && _.get(user, 'salary.price') <= 30000)passSalary = true
    if(q.salary === '30,000+')if(_.get(user, 'salary.price') >= 30000)passSalary = true
    
    // ageRange 'All','20 - 29','30 - 39','40 - 49','50+'
    let passAge = false
    if(q.ageRange === 'All')passAge = true
    if(q.ageRange === '20 - 29')if(_.get(user, 'detail.age') >= 20 && _.get(user, 'detail.age') <= 29)passAge = true
    if(q.ageRange === '30 - 39')if(_.get(user, 'detail.age') >= 30 && _.get(user, 'detail.age') <= 39)passAge = true
    if(q.ageRange === '40 - 49')if(_.get(user, 'detail.age') >= 40 && _.get(user, 'detail.age') <= 49)passAge = true
    if(q.ageRange === '50+')if(_.get(user, 'detail.age') >= 50)passAge = true

    // nationality 'All','Myanmar','Thai','Philippine','Laos','Cambodia'
    let passNationality = false
    if(q.nationality === 'All')passNationality = true
    if(q.nationality === _.get(user, 'detail.nationality'))passNationality = true

    // location 'All','Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui'
    let passLocation = false
    if(q.location === 'All')passLocation = true
    if(q.location === _.get(user, 'detail.location'))passLocation = true

    // position 'All','Maid&Nanny','Nursery','Teacher@Home'
    let passPosition = false
    if(q.position === 'All')passPosition = true
    if(q.position === 'Maid&Nanny')if(_.get(user, 'job.nanny') === true)passPosition = true
    if(q.position === 'Nursery')if(_.get(user, 'job.nanny') === true)passPosition = true
    if(q.position === 'Teacher@Home')if(_.get(user, 'job.teacher') === true)passPosition = true

    // workTime 'All Time','Full Time','Part Time'
    let passWorkTime = false
    if(q.workTime === 'All')passWorkTime = true
    if(q.workTime === _.get(user, 'job.workTime'))passWorkTime = true

    if( passSalary === true &&
        passAge === true &&
        passNationality === true &&
        passLocation === true &&
        passPosition === true &&
        passWorkTime === true
    ) return user
  });
  return result
}

class User extends Component {

  state = {
    user: {},
    query: {},
    resultUser: {},
  }

  componentDidMount = async () => {
    const { query } = this.props.url
    this.setState({
      query,
    })
    const users = await getData('users')
    this.setState({
      users: users,
    })

    this.setState({
      resultUser: await queryUsers(users, query)
    })
  }

  componentWillReceiveProps  = async (nextProps) => {
    const { pathname, query } = nextProps.url
    const { users } = this.state
    this.setState({
      query,
      resultUser: await queryUsers(users, query)
    })
  }

  render(){
    const { resultUser } = this.state
    return(
      <Layout url={this.props.url}>
        <ID>
          <PageName text="SEARCH"/>
          <br/>
          <Container>
            <FormSearch/>
            <br/>
            <Row>
            {_.map(resultUser, data => 
              <Col xs="12" sm="6" md="4" lg="3">
                <UserCard user={data}/>
              </Col>
            )}
            </Row>
          </Container>
        </ID>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(User)

const ID = styled.div`
  box-sizing: border-box;

  h1{
    font-size: 60px;
    color: white;
    font-weight: bold;
  }
  .head{
    background: ${color.main};
  }
`