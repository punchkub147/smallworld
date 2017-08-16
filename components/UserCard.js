import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class UserCard extends Component {
  state = {  }
  render() {
    const { user } = this.props
    console.log('UUUU', this.props)
    return (
      <div id="UserCard">
        <Card>
          <CardImg className="image" top width="100%" src={user.imageUrl&&user.imageUrl} alt="Card image cap" />
          <CardBlock>
            <CardTitle>{user.displayName&&user.displayName}</CardTitle>
            <CardSubtitle>{user.email&&user.email}</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default UserCard