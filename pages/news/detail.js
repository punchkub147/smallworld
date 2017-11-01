import React, { Component } from 'react'
import Router from 'next/router'
import moment from 'moment'
import _ from 'lodash'
import Layout from '../../layouts'
import PageName from '../../components/PageName'

import { Container, Row, Col, Button, Card, CardImg, CardBlock, CardSubtitle, CardText
 } from 'reactstrap';

 import { getAt } from '../../api/firebase'
 //////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'

class NewsDetail extends Component {

  state = {
    newData: {},
  }

  componentDidMount = async () => {
    const id = Router.query.id
    const newsData = await getAt('news', id)
    this.setState({
      newsData,
    })
  }

  render(){ 
    const { newsData } = this.state
    return(
      <Layout url={this.props.url}>
        <div id="NewsDetail">
          <PageName text="NEWS"/>

          <Container>
            <br/>
            <div className="row justify-content-md-center">
              <Col xs="12" sm="12" md="12">
                <Card>
                  <CardImg className="image" style={{height: 300, 'object-fit': 'contain', padding:'10px'}} top width="100%" src={_.get(newsData, 'image')} alt="Card image cap" />
                  <CardBlock>
                    <CardSubtitle style={{padding: '20px',fontSize: '30px'}} className="title">{_.get(newsData, 'title')}</CardSubtitle>                                        
                    <CardText className="herald" >{_.get(newsData, 'herald')}</CardText>
                    <CardText className="header1" style={{fontSize: '20px'}}>{_.get(newsData, 'header1')}</CardText>                    
                    <CardText className="content" >{_.get(newsData, 'content')}</CardText>
                    <CardText className="header2" style={{fontSize: '20px'}}>{_.get(newsData, 'header2')}</CardText>
                    <CardText className="content2" >{_.get(newsData, 'content2')}</CardText>
                    <CardText className="header3" style={{fontSize: '20px'}}>{_.get(newsData, 'header3')}</CardText>
                    <CardText className="content3" >{_.get(newsData, 'content3')}</CardText>
                    <CardText className="header4" style={{fontSize: '20px'}}>{_.get(newsData, 'header4')}</CardText>
                    <CardText className="content4" >{_.get(newsData, 'content4')}</CardText>
                    <CardText className="header5" style={{fontSize: '20px'}}>{_.get(newsData, 'header5')}</CardText>
                    <CardText className="content5" >{_.get(newsData, 'content5')}</CardText>

                    <CardText>{moment(_.get(newsData, 'createAt')).format("MMM Do YY")}</CardText>
                  </CardBlock>
                </Card>
              </Col>
            </div>
            
          </Container>
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(NewsDetail)