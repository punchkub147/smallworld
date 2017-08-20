import React, { Component } from 'react'
import Layout from '../layouts'

import PageName from '../components/PageName'
import Pricing from '../components/Pricing'
export default class extends Component {
  render(){
    return(
      <Layout url={this.props.url}>
        <div id="ServicePricing">
          <PageName text="OUR SERVICE"/>
          <br/>
          <Pricing/>
        </div>
      </Layout>
    )
  }
}