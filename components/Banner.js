import React, { Component } from 'react';
import styled from 'styled-components'
import { color } from '../static/styles'

import _ from 'lodash'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import FormSearch from './FormSearch'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const BigH = styled.h1`

color: #fff;


animation-name: jackInTheBox;
animation-duration: 2s;
animation-fill-mode: both;




@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  10% {
    color: #2bc2e7;
  }
  20% {
    
    color: #ed1846;
  }
  30% {
    
    color: #a4cd39;
  }
  40% {
    
    color: #f172ac;
  }

  50% {
    transform: rotate(-10deg);
    color: #facb1e;
  }
  60% {
    
    color: #f172ac;
  }

  70% {
    transform: rotate(3deg);
    color: #2bc2e7;
  }
  80% {
    
       color: #a4cd39;
     }
  
  90% {
    color: #b696c6;
       }

  to {
    opacity: 1;
    transform: scale(1);
  }
  
}
`

const BigH2 = styled.h2`
animation-duration: 1s;
animation-fill-mode: both;
animation-name: bounceInLeft;

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
}

`
const AnimateP = styled.p`
animation-duration: 2s;
animation-fill-mode: both;
animation-name: fadeInUp;

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}


  


`


class Banner extends Component {
  render() {
    const { messages } = this.props
    return (
      <ID id="">
        <Jumbotron style={{background: 'none'}}>
          <BigH className="display-3"
                    
          >Small World</BigH>
          
          <BigH2 className="display-3"><span className="border">Service Center</span></BigH2>
          <br/>
          <AnimateP className="lead">{messages.bannerSub}</AnimateP>
          <AnimateP>เพราะพวกเราสามารถส่งมอบทักษะด้านภาษาและการเข้าสังคมให้กับลูกของคุณอย่างมืออาชีพ ด้วยราคาที่คุ้มค่ากับอนาคตสำหรับลูกๆของคุณ</AnimateP>

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
  height: 550px;
  
  background: #56ab2f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  // background-image: url('../img/bg.jpg');
  // background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding-bottom: 30px;
  margin-bottom: 5px;
  box-sizing: border-box;
  .jumbotron{
    background-color: none;
    text-align: right;
    padding-bottom:60px;
    
  }
  .border{
    border-bottom: 5px solid ${color.sub};
  }
  
    

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
    color: #FFF;
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
      font-size: 150px;
      text-align: right;
      font-family: 'Indie Flower', cursive;
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