import React, { Component } from 'react';

import _ from 'lodash'

import { Container, Row, Col, 
  Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText,
  Button, FormGroup, Label, Form, Input,
  Modal, ModalHeader, ModalBody, 
  ListGroup, ListGroupItem
 } from 'reactstrap';

import { inputProfile, dropdownProfile, radioProfile, radioNanny, inputNanny, radioTeacher, inputTeacher } from '../config/form'
 // REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProfileDetail extends Component {
  render() {
    const { userData, language } = this.props

    //////////////// Profile //////////////////////////////////
    const Profile = (
      <Row>
      {_.map(inputProfile(language), ({label, ref}) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userData, `${ref[0]}.${ref[1]}`)} readOnly/>
            </Col>
          </FormGroup>
        </Col>
      )}
      {_.map(dropdownProfile(language), ({ label, ref, value }) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userData, `${ref[0]}.${ref[1]}`)} readOnly/>
            </Col>
          </FormGroup>
        </Col>
      )}
      {_.map(radioProfile(language), ({label, ref}) =>
      <Col xs="12" md="6">
        <div className="custom-controls-stacked">
          <p>{label}</p>
          <label className="custom-control custom-radio" >
            <input name={ref[1]} type="radio" className="custom-control-input"
              checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'checked':''}/>
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">Yes</span>
          </label>
          <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}>
            <input name={ref[1]} type="radio" className="custom-control-input"
            checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
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
      {_.map(radioNanny(language), ({label, ref}) =>
        <Col xs="12" md="6">
          <div className="custom-controls-stacked">
            <p>{label}</p>
            <label className="custom-control custom-radio" >
              <input name={ref[1]} type="radio" className="custom-control-input"
                checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'checked':''}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Yes</span>
            </label>
            <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}>
              <input name={ref[1]} type="radio" className="custom-control-input"
              checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">No</span>
            </label>
          </div>
        </Col>
      )}
      {_.map(inputNanny(language), ({label, ref}) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userData, `${ref[0]}.${ref[1]}`)} readOnly/>
            </Col>
          </FormGroup>
        </Col>
      )}
      </Row>
    )
    //////////////// TEACHER //////////////////////////////////
    const Teacher = (
      <Row>
      {_.map(radioTeacher(language), ({label, ref}) =>
        <Col xs="12" md="6">
          <div className="custom-controls-stacked">
            <p>{label}</p>
            <label className="custom-control custom-radio" >
              <input name={ref[1]} type="radio" className="custom-control-input"
                checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'checked':''}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Yes</span>
            </label>
            <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}>
              <input name={ref[1]} type="radio" className="custom-control-input"
              checked={_.get(userData, `${ref[0]}.${ref[1]}`)?'':'checked'}/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">No</span>
            </label>
          </div>
        </Col>
      )}
      {_.map(inputTeacher(language), ({label, ref}) =>
        <Col xs="12" md="6">
          <FormGroup row>
            <Label sm={12}>{label}</Label>
            <Col sm={12}>
              <Input type="text" placeholder="" value={_.get(userData, `${ref[0]}.${ref[1]}`)} readOnly/>
            </Col>
          </FormGroup>
        </Col>
      )}
      </Row>
    )
    //////////////////////////////////////////////

    return (
      <div id="FormEdit">
        {this.props.at==='Profile'&&Profile}
        {this.props.at==='Nanny'&&Nanny}
        {this.props.at==='Teacher'&&Teacher}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail)