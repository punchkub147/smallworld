import React, { Component } from 'react'
import Layout from '../layouts'
import PageName from '../components/PageName'
import _ from 'lodash'
import { color } from '../static/styles'
import styled from 'styled-components'
import { animate } from '../static/styles/animate'

import { Container, Row, Col, 
 } from 'reactstrap';

 //////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class About extends Component {
  render(){
    return(
      <Layout url={this.props.url}>
        <ID>
          <PageName text="ABOUT US"/>
          <br/>
          <Container>
            <Row className="what">
              <Col xs="12" md="6">
                <div className="image">
                  <img src="http://ugc-01.cafemomstatic.com/gen/constrain/500/500/80/2016/08/30/22/cg/4z/ponvjwwm8g.jpg"/>
                </div>
              </Col>
              <Col xs="12" md="6">
                <div className="content">
                  <div className="title"><span className="border">What is Small World ?</span></div>
                  <br/>
                  <div className="detail">พวกเราเป็นผู้ให้บริการจัดหาพี่เลี้ยง , คุณครูที่บ้าน และ เนิสเซอรี่ ที่เป็นชาวฟิลิปินส์ โดยคุณสามารถออกแบบบริการของเราได้ด้วยตัวคุณเอง</div>
                </div>
              </Col>
            </Row>
            <Row className="why">
              <Col xs="12">
                <div className="content">
                  <div className="title"><span className="border">Why Small World ?</span></div>
                  <br/>
                  <div className="detail">เพราะพวกเราสามารถส่งมอบทักษะด้านภาษาและการเข้าสังคมให้กับลูกของคุณอย่างมืออาชีพ ด้วยราคาที่คุ้มค่ากับอนาคตสำหรับลูกๆของคุณ</div>
                </div>
              </Col>
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

export default withRedux(initStore, null, mapDispatchToProps)(About)

const ID = styled.div`
  .what{
    margin-top: 50px;
    margin-bottom: 50px;
    
    .image{
      transform: rotate(-6deg);
      animation: fadeIn 0.5s ease-in 0s 1 alternate;
      
      img{
        border-radius: 10px;
        width: 100%;
      }
    }
    .content{
      margin-top: 50px;
      animation: fadeInUp 0.8s ease-in 0s 1 alternate;

      .title{
        font-size: 32px;
        font-weight: bold;
      }
      .border{
        border-bottom: 5px solid ${color.main};
      }
      .detail{
        font-size: 16px;
      }
    }
  }

  .why{
    .content{
      animation: fadeInUp 1.5s ease-in 0s 1 alternate;

      .title{
        font-weight: bold;
        font-size: 32px;
      }
      .border{
        border-bottom: 5px solid ${color.main};
      }
      .detail{
        font-size: 16px;
      }
    }
  }
  ${animate.fadeInUp}
  ${animate.fadeIn}
`;