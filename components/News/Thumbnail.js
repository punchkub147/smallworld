import React, { Component } from 'react';
import _ from 'lodash'
import moment from 'moment'
import Link from 'next/link'

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsThumbnail extends Component {
  render() {
    const { data, id } = this.props
    return (
      <div id="NewsThumbnail">
        <Card>
          <Link perfect href={`/news/detail?id=${id}`}>
            <CardImg className="image" top width="100%" src={data.image} alt="Card image cap" />
          </Link>
          <CardBlock>
            <CardSubtitle className="title">{data.title}</CardSubtitle>
            <CardText className="detail">{data.detail}</CardText>
            <CardText>{moment(data.createAt).format("MMM Do YY")}</CardText>
          </CardBlock>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsThumbnail)