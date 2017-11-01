import React, { Component } from 'react';
import _ from 'lodash'
import Link from 'next/link'
import Thumbnail from './Thumbnail'
import { Container, Row, Col } from 'reactstrap';

import { getData } from '../../api/firebase'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsFeed extends Component {

  state = {
    news: {},
  }

  componentDidMount = async () => {
    const news = await getData('news')
    this.setState({
      news,
    })
  }

  render() {
    const { news } = this.state
    const threeNews = _.take(_.reverse(_.map(news, (data, key) => {
      return {
        ...data,
        key,
      }
    }),'createAt'),3)
    return (
      <div id="NewsFeed">
        <Container>
          <br/><br/>
          <h4>FEATURE POST</h4>
          <br/>
          <Row>
          {_.map(threeNews, data =>
            <Col xs="12" md="4" lg="4">
              <Thumbnail data={data} id={data.key} />
            </Col>
          )}
          </Row>
          <br/>
          <Link href="/news"><p style={{cursor:'pointer', textAlign: 'center'}}>View More</p></Link>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //messages: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)