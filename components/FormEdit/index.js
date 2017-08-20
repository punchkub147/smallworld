import React, { Component } from 'react';

import _ from 'lodash'

import { Container, Row, Col, 
  Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText,
  Button, FormGroup, Label, Form, Input,
  Modal, ModalHeader, ModalBody, 
  ListGroup, ListGroupItem
 } from 'reactstrap';

import { updateAt } from '../../api/firebase'

class FormEditDetail extends Component {
  state = { 
    userData: {},
    userEdit: {},
    modalEdited: false,
  }

  componentDidMount() {
    const { userData } = this.props
    this.setState({
      userData,
      userEdit: userData,
    })
  }

  handleEditProfile = async (e) => {
    e.preventDefault()
    const { userEdit, userData } = this.state
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
      }
    }
    // await updateAt('users', `${userData.uid}/detail`, userEdit.detail)
    // await updateAt('users', `${userData.uid}/ability`, userEdit.ability)
    // await updateAt('users', `${userData.uid}/question`, userEdit.question)
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
    const { userEdit, userData } = this.state

    const modalEdited = (
      <Modal isOpen={this.state.modalEdited} toggle={() => this.setState({modalEdited: !this.state.modalEdited})}>
        <ModalHeader toggle={() => this.setState({modalEdited: !this.state.modalEdited})}>Edited</ModalHeader>
        <ModalBody>
          Edited Success
        </ModalBody>
      </Modal>
    )

    //////////////// Profile //////////////////////////////////
    const Profile = (
      <Form onSubmit={this.handleEditProfile}>
        <Row>
          <Col xs="12" md="6">
            <FormGroup row>
              <Label sm={12}>Firstname</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.firstName')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,firstName: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Lastname</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.lastName')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,lastName: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Nickname</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.nickName')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,nickName: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Age</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.age')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,age: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Birthday</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.birthDay')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,birthDay: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Address</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.address')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,address: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Mobile Number</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.mobile')}
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,mobile: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Passport Number</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.passportNo')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,passportNo: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
          </Col>
          
          <Col xs="12" md="6">
    
            <FormGroup row>
              <Label sm={12}>Passport Expiration Date</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.passportExpirationDate')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,passportExpirationDate: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Visa Expiration Date</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.visaExpirationDate')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,visaExpirationDate: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Status</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.status')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,status: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Nationality</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.nationality')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,nationality: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Education</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.education')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,education: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>Religion</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.religion')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,religion: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            <FormGroup row>
              <Label sm={12}>How long have you stayed in thailand?</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.stayThaiTime')} 
                  onChange={(e) => this.setState({userEdit:{...userEdit,detail: {...userEdit.detail,stayThaiTime: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
            {/*<FormGroup row>
              <Label sm={12}>Language Spoken</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'detail.firstName')} 
                  onChange={(e) => this.setState({userEdit:{detail: {...userEdit.detail,firstName: e.target.value}}})}/>
              </Col>
            </FormGroup>*/}
    
          </Col>
        </Row>
      </Form>
    )
    //////////////// NANNY //////////////////////////////////
    const Nanny = (
      <Form onSubmit={this.handleEditProfile}>
        <Row>
          <Col xs="12" md="6">

            <div className="custom-controls-stacked">
              <p>Own a driver's license?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,driverLicense: true}}})}>
                <input name="driverLicense" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.driverLicense')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,driverLicense: false}}})}>
                <input name="driverLicense" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.driverLicense')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>If you travel by car will you get carsick?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,carsick: true}}})}>
                <input name="carsick" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.carsick')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,carsick: false}}})}>
                <input name="carsick" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.carsick')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you smoke?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,smoke: true}}})}>
                <input name="smoke" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.smoke')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,smoke: false}}})}>
                <input name="smoke" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.smoke')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Can you swim?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,swim: true}}})}>
                <input name="swim" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.swim')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,swim: false}}})}>
                <input name="swim" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.swim')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Can you cook Thai cuisine?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,cookThai: true}}})}>
                <input name="cookThai" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.cookThai')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,cookThai: false}}})}>
                <input name="cookThai" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.cookThai')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you have experience for cooking for the family?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,cookForFamily: true}}})}>
                <input name="cookForFamily" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.cookForFamily')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,cookForFamily: false}}})}>
                <input name="cookForFamily" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.cookForFamily')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Have you ever helped with homework?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,helpHomework: true}}})}>
                <input name="helpHomework" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.helpHomework')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,helpHomework: false}}})}>
                <input name="helpHomework" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.helpHomework')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <FormGroup row>
              <Label sm={12}>Why did you choose to become a nanny?</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'question.becomeNanny')} 
                  onChange={(e) => 
                    this.setState({userEdit:{...userEdit,question: {...userEdit.question,becomeNanny: e.target.value}}})}/>
              </Col>
            </FormGroup>

          </Col>
          <Col xs="12" md="6">
    
            <div className="custom-controls-stacked">
              <p>Are you willing to work overtime?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workOvertime: true}}})}>
                <input name="workOvertime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workOvertime')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workOvertime: false}}})}>
                <input name="workOvertime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workOvertime')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you like pets?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,likePets: true}}})}>
                <input name="likePets" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.likePets')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,likePets: false}}})}>
                <input name="likePets" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.likePets')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Have you had experience with twins/triplet?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,expTwin: true}}})}>
                <input name="expTwin" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.expTwin')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,expTwin: false}}})}>
                <input name="expTwin" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.expTwin')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you still have any contacts with your previous employer?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,contactWithEmployer: true}}})}>
                <input name="contactWithEmployer" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.contactWithEmployer')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,contactWithEmployer: false}}})}>
                <input name="contactWithEmployer" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.contactWithEmployer')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Visa fee will be paid by ________</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,visaPaider: true}}})}>
                <input name="visaPaider" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.visaPaider')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,visaPaider: false}}})}>
                <input name="visaPaider" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.visaPaider')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Are you willing to participate any seminars that can upgrade your teaching skill?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,upgrageSkill: true}}})}>
                <input name="upgrageSkill" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.upgrageSkill')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,upgrageSkill: false}}})}>
                <input name="upgrageSkill" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.upgrageSkill')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <FormGroup row>
              <Label sm={12}>What are your hobbies and interesting things about you?</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'question.hobbiesInterest')} 
                  onChange={(e) => 
                    this.setState({userEdit:{...userEdit,question: {...userEdit.question,hobbiesInterest: e.target.value}}})}/>
              </Col>
            </FormGroup>

          </Col>
        </Row>
      </Form>
    )
    //////////////// TEACHER //////////////////////////////////
    const Teacher = (
      <Form onSubmit={this.handleEditProfile}>
        <Row>
          <Col xs="12" md="6">

           <div className="custom-controls-stacked">
              <p>Own a driver's license?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,driverLicense: true}}})}>
                <input name="driverLicense" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.driverLicense')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,driverLicense: false}}})}>
                <input name="driverLicense" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.driverLicense')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you smoke?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,smoke: true}}})}>
                <input name="smoke" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.smoke')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,smoke: false}}})}>
                <input name="smoke" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.smoke')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Can you swim?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,swim: true}}})}>
                <input name="swim" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.swim')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,swim: false}}})}>
                <input name="swim" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.swim')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Certificates or licenses you have for teaching or any field related to caretaking or babysitting.</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,certificatesTeaching: true}}})}>
                <input name="certificatesTeaching" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.certificatesTeaching')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,certificatesTeaching: false}}})}>
                <input name="certificatesTeaching" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.certificatesTeaching')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Health concerns or allergies you have which would affect long-term work</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,concernsTeamWork: true}}})}>
                <input name="concernsTeamWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.concernsTeamWork')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,concernsTeamWork: false}}})}>
                <input name="concernsTeamWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.concernsTeamWork')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you think you can work under pressure?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,workPressure: true}}})}>
                <input name="workPressure" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.workPressure')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,ability: {...userEdit.ability,workPressure: false}}})}>
                <input name="workPressure" type="radio" className="custom-control-input" checked={_.get(userEdit, 'ability.workPressure')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <FormGroup row>
              <Label sm={12}>Why did you choose to become a Teacher?</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'question.becomeTeacher')} 
                  onChange={(e) => 
                    this.setState({userEdit:{...userEdit,question: {...userEdit.question,becomeTeacher: e.target.value}}})}/>
              </Col>
            </FormGroup>
    
          </Col>
          <Col xs="12" md="6">

            <div className="custom-controls-stacked">
              <p>Are you willing to work overtime?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workOvertime: true}}})}>
                <input name="workOvertime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workOvertime')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workOvertime: false}}})}>
                <input name="workOvertime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workOvertime')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Are you willing to do some extra work aside from teaching?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,extraWork: true}}})}>
                <input name="extraWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.extraWork')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,extraWork: false}}})}>
                <input name="extraWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.extraWork')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you like to work in a team?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,teamWork: true}}})}>
                <input name="teamWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.teamWork')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,teamWork: false}}})}>
                <input name="teamWork" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.teamWork')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you have teaching job experience?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,expTeaching: true}}})}>
                <input name="expTeaching" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.expTeaching')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,expTeaching: false}}})}>
                <input name="expTeaching" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.expTeaching')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <div className="custom-controls-stacked">
              <p>Do you like to work in a team?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workInTime: true}}})}>
                <input name="workInTime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workInTime')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,workInTime: false}}})}>
                <input name="workInTime" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.workInTime')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>
    
            <div className="custom-controls-stacked">
              <p>Do you still have any contacts with your previous employer?</p>
              <label className="custom-control custom-radio" 
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,contactWithEmployer: true}}})}>
                <input name="contactWithEmployer" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.contactWithEmployer')?'checked':''}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Yes</span>
              </label>
              <label className="custom-control custom-radio" style={{top:'-28px',left: '80px'}}
                onClick={(e) => this.setState({userEdit:{...userEdit,question: {...userEdit.question,contactWithEmployer: false}}})}>
                <input name="contactWithEmployer" type="radio" className="custom-control-input" checked={_.get(userEdit, 'question.contactWithEmployer')?'':'checked'}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">No</span>
              </label>
            </div>

            <FormGroup row>
              <Label sm={12}>What are your hobbies and interesting things about you?</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'question.hobbiesInterest')} 
                  onChange={(e) => 
                    this.setState({userEdit:{...userEdit,question: {...userEdit.question,hobbiesInterest: e.target.value}}})}/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={12}>How long can you waiting for interviewed? (after you fill this application)</Label>
              <Col sm={12}>
                <Input type="text" placeholder="" value={_.get(userEdit, 'question.interviewedTime')} 
                  onChange={(e) => 
                    this.setState({userEdit:{...userEdit,question: {...userEdit.question,interviewedTime: e.target.value}}})}/>
              </Col>
            </FormGroup>

          </Col>
        </Row>
      </Form>
    )
    //////////////////////////////////////////////

    return (
      <div id="FormEdit">
        {this.props.at==='Profile'&&Profile}
        {this.props.at==='Nanny'&&Nanny}
        {this.props.at==='Teacher'&&Teacher}
        
        <Button color="primary" size="lg" block onClick={this.handleEditProfile}>Confirm Edit</Button>
        {modalEdited}
      </div>
    );
  }
}

export default FormEditDetail;