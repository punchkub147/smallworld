import React, { Component } from 'react';
import _ from 'lodash'
import moment from 'moment'
import Link from 'next/link'

import { Row, Col, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import NewsDelete from './Delete'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsBigThumbnail extends Component {
  render() {
    const { data, id } = this.props
    return (
      <div id="NewsBigThumbnail">
        <Card>
          <Row>
            <Col sm="6">
            <Link perfect href={`/news/detail?id=${id}`}>
              <CardImg className="image" top width="100%" src={data.image} alt="Card image cap" />
            </Link>
            </Col>
            <Col sm="6">
              <CardBlock>
                <CardTitle className="title">{data.title}</CardTitle>
                <CardSubtitle className="detail">{data.detail}</CardSubtitle>
                <CardText>{moment(data.createAt).format("MMM Do YY")}</CardText>
                
                <NewsDelete id={id}/>

              </CardBlock>
            </Col>
          </Row>
        </Card>
        <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsBigThumbnail)