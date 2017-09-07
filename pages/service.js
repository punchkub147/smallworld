import React, { Component } from 'react'
import Layout from '../layouts'
import { color } from '../static/styles'
import styled from 'styled-components'

import PageName from '../components/PageName'
import Pricing from '../components/Pricing'

//////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class Service extends Component {
  render(){
    return(
      <Layout url={this.props.url}>
        <ID>
          <PageName text="OUR SERVICE"/>
          <br/>
          <Pricing/>
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

export default withRedux(initStore, null, mapDispatchToProps)(Service)

const ID = styled.div`

`