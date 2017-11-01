import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, 
  Label, Input, FormText, Card, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import Router from 'next/router'
import _ from 'lodash'
import cuid from 'cuid'

import { createNews, uploadNewsImage } from '../../api/firebase'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsAdd extends Component {
  state = { 
    image: '',
    title: '',
    detail: '',
    content: '',
    file: '',
    modal: false,
    disableBtn: false,
  }

  handleAdd = async (e) => {
    e.preventDefault()
    this.setState({disableBtn: true})
    const { file, title, detail, content } = this.state
    const id = cuid()
    const image = await uploadNewsImage(file, id)
    const news = {
      id,
      image,
      title,
      detail,
      content,
    }
    createNews(news)
    this.openModal()
    this.setState({
      image: '',
      title: '',
      detail: '',
      content:'',
      file: '',
      disableBtn: false
    })
  }

  handleChangeImage = async (e) => {
    const _this = this;
    const file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      _this.setState({ 
        image: reader.result,
        file,
      })
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { messages, user } = this.props
    const { image } = this.state
    const form = (
      <Form onSubmit={this.handleAdd}>
      
        <img src={!_.isEmpty(image)?image:'https://res.weloveshopping.com/915592/w_228,h_228,c_thumb/w_228,h_228,c_crop/5ef0001c44a797976cdb56ffa161aaf6/5ef0001c44a797976cdb56ffa161aaf6.jpg'} 
          style={{height: '200px', width: '100%', 'object-fit': 'contain'}}/>
        <label style={{textAlign: 'center', width: '100%'}}>
          <input accept="jpg,jpeg,JPG,JPEG" multiple type="file" style={{display: 'none'}}
            onChange={this.handleChangeImage} />
          <span className="btn btn-primary" style={{position: 'relative',cursor: 'pointer', width:'100%'}}>Upload Image</span>
        </label>

        <FormGroup row>
          <Label sm={12}>Subject</Label>
          <Col sm={12}>
            <Input type="text" onChange={(e) => this.setState({title: e.target.value})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={12}>Detail</Label>
          <Col sm={12}>
            <Input type="textarea" style={{height: '150px'}} onChange={(e) => this.setState({detail: e.target.value})}/>
            
          </Col>
        </FormGroup>

        <Button color="primary" size="lg" disabled={this.state.disableBtn} block onSubmit={this.handleAdd}>{_.get(messages,'Add')}</Button>
      </Form>
    )

    if(_.get(user, 'admin') !== true) return <div/>
    return (
      <div id="NewsAdd">

        <Button color="primary" onClick={this.openModal}>{_.get(messages,'Add News')}</Button>
        
        <Modal isOpen={this.state.modal} toggle={this.openModal}>
          <ModalHeader toggle={this.openModal}>{_.get(messages,'Add News')}</ModalHeader>
          <ModalBody>
            {form}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAdd)