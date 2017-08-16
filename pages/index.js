import React, { Component } from 'react'
import Layout from '../layouts'

import Banner from '../components/Banner';
import FromRegister from '../components/FromRegister';
import Carousel from '../components/Carousel';
import Service from '../components/Service';

export default class Index extends Component {
  render(){
    return(
      <Layout>
        <div id="Home">
          <Banner/>
          
          <div className="content">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-3">
                <FromRegister/>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-9">
                <Carousel/>
              </div>
            </div>
          </div>

          <Service/>
         
        </div>
      </Layout>
    )
  }
}