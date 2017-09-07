import React, { Component } from 'react';

import _ from 'lodash'

import { Container, Row, Col, 
  Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText,
  Button, FormGroup, Label, Form, Input,
  Modal, ModalHeader, ModalBody, 
  ListGroup, ListGroupItem
 } from 'reactstrap';

import { updateAt } from '../../api/firebase'

import { inputProfile, dropdownProfile, radioProfile, radioNanny, inputNanny, radioTeacher, inputTeacher } from '../../config/form'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class FormEditDetail extends Component {
  state = {
    userEdit: {},
    modalEdited: false,
  }

  componentDidMount() {
    const { userData } = this.props
    this.setState({
      userEdit: userData,
    })
  }

  handleEditProfile = async (e) => {
    e.preventDefault()
    const { userEdit } = this.state
    const { userData } = this.props
    const user = {
      ...userData,
      ...userEdit,
      detail: {
        ...userData.detail,
        ...userEdit.detail,
      },
      ability: {
        ...userData.ability,
        ...userEdit.ability,
      },
      question: {
        ...userData.question,
        ...userEdit.question,
      },
      job: {
        ...userData.job,
        ...userEdit.job,
      },
      salary: {
        ...userData.salary,
        ...userEdit.salary,
      }
    }
    console.log('useruseruseru')
    await updateAt('users', userData.uid, userEdit)
    this.setState({
      modalEdited: true,
    })
    setTimeout(() => {
      this.setState({
        modalEdited: false,
      })
    }, 2000)
  }

  render() {
    const { userEdit } = this.state
    const { language } = this.props

    //////////////// Profile //////////////////////////////////
    const Profile = (
      <Row>
        {_.map(inputProfile(language), ({ label, ref }) =>
          <Col xs="12" md="6">
            <FormGroup row>
              <Label sm={12}>{label}</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, `${ref[0]}.${ref[1]}`)} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: e.target.value}}})}/>
              </Col>
            </FormGroup>
          </Col>
        )}
        {_.map(dropdownProfile(language), ({ label, ref, value }) =>
          <Col xs="12" md="6">
            <FormGroup row>
              <Label sm={12}>{label}</Label>
              <Col sm={12}>
                <Input type="select" onChange={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: e.target.value}}})}>
                {_.map(value, val =>
                  <option val={val} selected={_.get(userEdit, `${ref[0]}.${ref[1]}`) === val}>{val}</option>
                )}
              </Input>
              </Col>
            </FormGroup>
          </Col>
        )}
        {_.map(radioProfile(language), ({ label, ref}) =>
          <Col xs="12" md="6">
            <div className="custom-controls-stacked">
              <p>{label}</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: true}}})}>
                <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: false}}})}>
                <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>
          </Col>
        )}
      </Row>
    )
    //////////////// NANNY //////////////////////////////////
    const Nanny = (
      <Row>
      {_.map(radioNanny(language), ({ label, ref}) =>
        <Col xs="12" md="6">
          <div className="custom-controls-stacked">
            <p>{label}</p>
            <label className="custom-control custom-radio" 
              onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: true}}})}>
              <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'checked':''}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Yes</span>
            </label>
            <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
              onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: false}}})}>
              <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">No</span>
            </label>
          </div>
        </Col>
      )}
      {_.map(inputNanny(language), ({ label,ref }) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userEdit, `${ref[0]}.${ref[1]}`)} 
                onChange={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: e.target.value}}})}/>
            </Col>
          </FormGroup>
        </Col>
      )}
      </Row>
    )
    //////////////// TEACHER //////////////////////////////////
    const Teacher = (
      <Row>
      {_.map(radioTeacher(language), ({ label, ref}) =>
        <Col xs="12" md="6">
          <div className="custom-controls-stacked">
            <p>{label}</p>
            <label className="custom-control custom-radio" 
              onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: true}}})}>
              <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'checked':''}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Yes</span>
            </label>
            <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
              onClick={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: false}}})}>
              <input name={ref[1]} type="radio" className="custom-control-input" checked={_.get(userEdit, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">No</span>
            </label>
          </div>
        </Col>
      )}
      {_.map(inputTeacher(language), ({ label,ref }) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userEdit, `${ref[0]}.${ref[1]}`)} 
                onChange={(e) => this.setState({userEdit:{...userEdit,[ref[0]]: {...userEdit[ref[0]],[ref[1]]: e.target.value}}})}/>
            </Col>
          </FormGroup>
        </Col>
      )}
      </Row>
    )
    //////////////////////////////////////////////

    const modalEdited = (
      <Modal isOpen={this.state.modalEdited} toggle={() => this.setState({modalEdited: !this.state.modalEdited})}>
        <ModalHeader toggle={() => this.setState({modalEdited: !this.state.modalEdited})}>Edited</ModalHeader>
        <ModalBody>
          Edited Success
        </ModalBody>
      </Modal>
    )

    return (
      <div id="FormEdit">
        <Form onSubmit={this.handleEditProfile}>
          {this.props.at==='Profile'&&Profile}
          {this.props.at==='Nanny'&&Nanny}
          {this.props.at==='Teacher'&&Teacher}
          
          <Button color="primary" size="lg" block onSubmit={this.handleEditProfile}>Confirm Edit</Button>
        </Form>  
        {modalEdited}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditDetail)