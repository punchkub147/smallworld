import React, { Component } from 'react';
import styled from 'styled-components'
import { color } from '../static/styles'

import _ from 'lodash'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import FormSearch from './FormSearch'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Banner extends Component {
  render() {
    const { messages } = this.props
    return (
      <ID id="">
        <Jumbotron style={{background: 'none'}}>
          <h1 className="display-3">Small World</h1>
          <h2 className="display-3"><span className="border">Service Center</span></h2>
          <br/>
          <p className="lead">{messages.bannerSub}</p>
          <p>เพราะพวกเราสามารถส่งมอบทักษะด้านภาษาและการเข้าสังคมให้กับลูกของคุณอย่างมืออาชีพ ด้วยราคาที่คุ้มค่ากับอนาคตสำหรับลูกๆของคุณ</p>

          <FormSearch/>
        </Jumbotron>
        {/*}
        <div className="imageBanner"></div>
        <Row style={{margin: 0}}>
          <Col sm="12" md="4" lg="6">
          </Col>
          <Col xs="12" sm="12" md="8" lg="5">
            <div className="logo">
              <img src="/static/img/logo.png"/>
              <br/><br/>
              <FormSearch/>
            </div>
          </Col>
        </Row>
    */}
      </ID>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner)

const ID = styled.div`
  width: 100%;  
  background: ${color.main};
  // background-image: url('../img/bg.jpg');
  // background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .jumbotron{
    background-color: none;
    text-align: right;
  }
  .border{
    border-bottom: 5px solid ${color.sub};
  }
  h1{
    color: white;
    font-weight: bold;
  }
  h2{
    color: white;
    font-weight: bold;
  }
  h3{
    font-size: 18px;
  }
  p{
    font-size: 18px;
    color: #333;
  }

  .logo {
    position: relative;
    z-index: 3;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
    img{
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    h1{
      font-size: 40px;
      text-align: center;
    }
    h2{
      font-size: 35px;
      text-align: center;
    }
    .jumbotron{
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    .jumbotron{
      padding: 0 50px;
    }
    padding: 50px;
    h1{
      font-size: 100px;
      text-align: right;
    }
    h2{
      width: auto;
      font-size: 60px;
      text-align: right;
    }
    h3{
      text-align: right;
    }
    p{
      text-align: right;
    }
    .logo{
      width: 100%;
      padding-top: 0px;
    }
    .imageBanner {
      background-image: url('../static/img/imageBanner.png');
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: 100px 0;
      background-size: 500px auto;
    }
  }


`