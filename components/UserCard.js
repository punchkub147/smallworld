import React, { Component } from 'react';
import _ from 'lodash'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Link from 'next/link'

class UserCard extends Component {
  render() {
    const { user } = this.props
    return (
      <div id="UserCard">
        <Card>
          <Link href={`/profile/view?uid=${user.uid}`}>
            <CardImg className="image" top width="100%" src={!_.isEmpty(user.imageUrl)?user.imageUrl:'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Person_Undefined_Female_Dark.png'} alt="Card image cap" />
          </Link>
          <CardBlock>
            <CardTitle></CardTitle>
            <CardSubtitle>{_.get(user, 'detail.firstName')} {_.get(user, 'detail.lastName')}</CardSubtitle>
            <CardText className="description"></CardText>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default UserCard