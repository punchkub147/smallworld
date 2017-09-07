import React, { Component } from 'react'
import _ from 'lodash'
import Layout from '../../layouts'
import PageName from '../../components/PageName'

import { Container, Row, Col, Button
 } from 'reactstrap';

import NewsBigThumbnail from '../../components/News/BigThumbnail'
import NewsAdd from '../../components/News/Add'

import { getRealTimeData, getUser } from '../../api/firebase'
 //////// REDUX ///////
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore } from '../../store'
import withRedux from 'next-redux-wrapper'

class News extends Component {

  state = {
    user: {},
    news: {},
  }

  componentDidMount = async () => {
    getRealTimeData('news', news =>
      this.setState({
        news,
      })
    )
    getUser(user => {
      this.setState({
        user
      })
    })
  }

  render(){ 
    const { news } = this.state
    const tenNews = _.take(_.reverse(_.map(news, (data, key) => {
      return {
        ...data,
        key,
      }
    }),'createAt'),20)
    return(
      <Layout url={this.props.url}>
        <div id="News">
          <PageName text="NEWS"/>
          <br/>
          
          <Container>
            <div>
              <NewsAdd/><br/>
            </div>
            <Row>
              <Col xs="12" md="8">
              {_.map(tenNews, data =>
                <NewsBigThumbnail data={data} id={data.key}/>
              )}
              </Col>
              <Col xs="12" md="4">
                <div className="hidden-sm-down" style={{width: '100%',padding: '30px', background: '#b6d379', textAlign: 'center', fontSize: '60px', color: 'white'}}>
                  <p>S</p>
                  <p>M</p>
                  <p>A</p>
                  <p>L</p>
                  <p>L</p>
                  <p>W</p>
                  <p>O</p>
                  <p>R</p>
                  <p>L</p>
                  <p>D</p>
                </div>
              </Col>
            </Row>
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

export default withRedux(initStore, null, mapDispatchToProps)(News)