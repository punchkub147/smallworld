import React, { Component } from 'react'
import Layout from '../layouts'
import { color } from '../static/styles'
import styled from 'styled-components'

import { Container, Row, Col } from 'reactstrap';

import Banner from '../components/Banner';
import FormRegister from '../components/FormRegister';
import Carousel from '../components/Carousel';
import Service from '../components/Service';
import NewsFeed from '../components/News/Feed';

//////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class Home extends Component {

  componentDidMount() {

  }

  render(){
    return(
      <Layout url={this.props.url}>
        <ID>
          <Banner/>
          
          <Row className="content">
            
            <Col sm="12" md="12">
              <Carousel/>
            </Col>
          </Row>
          
          <NewsFeed/>
          <Service/>
         
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

export default withRedux(initStore, null, mapDispatchToProps)(Home)

const ID = styled.div`
  .content{
    margin: 0;
    padding: 15px 5px;
    box-sizing: border-box;
    background: ${color.main};

    .register{
      padding: 20px;
      background: white;
    }
  }
`