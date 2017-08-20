import React, { Component } from 'react'
import Layout from '../layouts'

import { Container, Row, Col } from 'reactstrap';

import Banner from '../components/Banner';
import FormRegister from '../components/FormRegister';
import Carousel from '../components/Carousel';
import Service from '../components/Service';

export default class extends Component {
  render(){
    return(
      <Layout url={this.props.url}>
        <div id="Home">
          <Banner/>
          
          <Carousel/>
          
          <Service/>
         
        </div>
      </Layout>
    )
  }
}