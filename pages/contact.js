import React, { Component } from 'react'
import Layout from '../layouts'

import PageName from '../components/PageName'
import MyContact from '../components/Contact'
import { contact } from '../api/sendEmail';

//////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class Contact extends Component {

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
        <MyContact/>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(Contact)