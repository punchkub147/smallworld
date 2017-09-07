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
                  <CardImg className="image" style={{height: 300, 'object-fit': 'contain'}} top width="100%" src={_.get(newsData, 'image')} alt="Card image cap" />
                  <CardBlock>
                    <CardSubtitle className="title">{_.get(newsData, 'title')}</CardSubtitle>
                    <CardText className="detail">{_.get(newsData, 'detail')}</CardText>
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