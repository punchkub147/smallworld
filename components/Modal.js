import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class extends Component {
  state = { 
    modal: false
  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    return (
      <div id="Modal">
        <Button color="primary" onClick={this.openModal}>{this.props.btnText}</Button>
        <Modal isOpen={this.state.modal} toggle={this.openModal}>
          <ModalHeader toggle={this.openModal}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
