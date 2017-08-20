import React, { Component } from 'react'
import Layout from '../layouts'
import PageName from '../components/PageName'

import { Container, Row, Col, 
 } from 'reactstrap';

export default class extends Component {
  render(){
    return(
      <Layout url={this.props.url}>
        <div id="About">
          <PageName text="ABOUT US"/>
          <br/>
        </div>
      </Layout>
    )
  }
}