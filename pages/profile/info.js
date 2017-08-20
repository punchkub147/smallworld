import React, { Component } from 'react'
import Layout from '../../layouts'
import _ from 'lodash'

import { Container, Row, Col, 
  Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText,
  Button, FormGroup, Label, Form, Input,
  Modal, ModalHeader, ModalBody, 
  ListGroup, ListGroupItem
 } from 'reactstrap';
 
import Router from 'next/router'

import { getUser, logout, getUserData, updateAt, changeProfileImage } from '../../api/firebase'

import FormEdit from '../../components/FormEdit'

export default class extends Component {

  state = {
    user: {},
    userData: {},
    modalEdited: false,
    editOn: 'Profile',
    imageProfile: '',
  }

  componentDidMount = async () => {
    await this.fetchGetUser()
  }

  fetchGetUser = async () => {
    await getUser(async user => {
      await this.setState({
        user,
      })
      const userData = await getUserData(user.uid)
      this.setState({
        userData,
        imageProfile: userData.imageUrl,
      })
    })
  }

  handleLogout = () => {
    logout(error => {
      console.log(error)
    })
    Router.push({
      pathname: '/',
    })
  }

  handleChangeProfileImage = async (e) => {
    const _this = this;
    const { user } = this.state
    const file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      _this.setState({ 
        imageProfile: reader.result
      })
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    await changeProfileImage(file,user.uid)
  }

  render(){
    const { user, userData, userEdit, editOn, imageProfile } = this.state
    // const selectAge = ['All','20-29','30-39','40-49','50+']
    // const selectNation = ['Myanmar','Thai','Philippine','Laos','Cambodia']
    // const selectLocation = ['Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui']
    // const selectPosition = ['Maid&Nanny','Nursery','Teacher@Home']
    // const selectworkTime = ['Full Time','Part Time']
    console.log(this.state.imageFile)

    return(
      <Layout url={this.props.url}>
        <div id="Profile">
          <Container>
            <Row>
              <Col xs="12" sm="6" md="4" lg="3">
                <Card className="card-user">
                  <CardImg className="image" top width="100%" 
                    src={!_.isEmpty(imageProfile)?imageProfile:'https://cdn1.iconfinder.com/data/icons/IconsLandVistaPeopleIconsDemo/256/Person_Undefined_Female_Dark.png'} alt="Card image cap" />
                  <label style={{textAlign: 'center'}}>
                    <input accept="jpg,jpeg,JPG,JPEG" multiple type="file" style={{display: 'none'}}
                      onChange={this.handleChangeProfileImage} />
                    <span className="btn btn-primary" style={{position: 'relative',cursor: 'pointer', width:'100%'}}>Change Image</span>
                  </label>
                </Card>
                <br/>
                <ListGroup>
                  <ListGroupItem id={editOn==='Profile'?'active':''} onClick={() => this.setState({editOn: 'Profile'})} tag="button" action>Profile</ListGroupItem>
                  <ListGroupItem id={editOn==='Nanny'?'active':''} onClick={() => this.setState({editOn: 'Nanny'})} tag="button" action>Nanny</ListGroupItem>
                  <ListGroupItem id={editOn==='Teacher'?'active':''} onClick={() => this.setState({editOn: 'Teacher'})} tag="button" action>Teacher</ListGroupItem>
                </ListGroup>
              </Col>
      
              <Col xs="12" sm="12" md="8" lg="9">
                <Card className="head">
                  <h1>{editOn}</h1>
                </Card>
                <br/>
                <Card className="detail">
                {!_.isEmpty(userData)&&
                  <FormEdit at={editOn} userData={userData}/>
                }
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}
