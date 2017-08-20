import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, 
  Label, Input, FormText, Card, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import Router from 'next/router'
import _ from 'lodash'

export default class extends Component {
  state = { 
    saraly: 'All',
    ageRange: 'All',
    nationality: 'All',
    location: 'All',
    position: 'All',
    workTime: 'All Time',
    skill: 'Speak Thai',
    modal: false,
  }

  componentDidMount() {
    const { query } = Router.router
    const { saraly, ageRange, nationality, location, position, workTime, skill } = query
    this.setState({
      ...this.state,
      saraly,
      ageRange,
      nationality,
      location,
      position,
      workTime,
      skill,
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    const { saraly, ageRange, nationality, location, position, workTime, skill } = this.state
    const query = {
      saraly: saraly?saraly:'All',
      ageRange: ageRange?ageRange:'All',
      nationality: nationality?nationality:'All',
      location: location?location:'All',
      position: position?position:'All',
      workTime: workTime?workTime:'All Time',
      skill: skill?skill:'All',
    }
    Router.push({
      pathname: '/user',
      query,
    })
    this.openModal()
  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { saraly, ageRange, nationality, location, position, workTime, skill } = this.state
    const selectAge = ['All','20-29','30-39','40-49','50+']
    const selectNation = ['All','Myanmar','Thai','Philippine','Laos','Cambodia']
    const selectLocation = ['All','Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui']
    const selectPosition = ['All','Maid&Nanny','Nursery','Teacher@Home']
    const selectworkTime = ['All Time','Full Time','Part Time']
    //const selectSkill = ['Speak Thai','Speak English','Speak Chinese','Cook']

    const form = (
      <Form onSubmit={this.handleSearch}>
        <FormGroup row>
          <Label sm={3}>Age range</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({ageRange: e.target.value})}>
            {_.map(selectAge, val =>
              <option val={val} selected={ageRange === val}>{val}</option>
            )}
          </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Salary</Label>
          <Col sm={9}>
            <Input type="search" placeholder="maximum salary"  onChange={(e) => this.setState({saraly: e.target.value})}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Nationality</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({nationality: e.target.value})}>
            {_.map(selectNation, val =>
              <option val={val} selected={nationality === val}>{val}</option>
            )}
            </Input>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label sm={3}>Location</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({location: e.target.value})}>
            {_.map(selectLocation, val =>
              <option val={val} selected={location === val}>{val}</option>
            )}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Position</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({position: e.target.value})}>
            {_.map(selectPosition, val =>
              <option val={val} selected={position === val}>{val}</option>
            )}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Work Time</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({workTime: e.target.value})}>
            {_.map(selectworkTime, val =>
              <option val={val} selected={workTime === val}>{val}</option>
            )}
            </Input>
          </Col>
        </FormGroup>
        
        {/*
        <FormGroup row>
          <Label sm={3}>Skill</Label>
          <Col sm={9}>
            {_.map(selectSkill, val =>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" 
                  onClick={(e) => 
                    this.setState({
                      skill:{
                        ...this.state.skill,
                        [val]: true,
                      }
                    })
                  }/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description" selected>{val}</span>
              </label>
            )}
          </Col>
        </FormGroup>
        */}
        <Button color="primary" size="lg" block onSubmit={this.handleSearch}>ค้นหา</Button>
      </Form>
    )

    return (
      <div id="Search">

        <Button color="primary" onClick={this.openModal}>Search Nanny</Button>
        
        <Modal isOpen={this.state.modal} toggle={this.openModal}>
          <ModalHeader toggle={this.openModal}>Search Nanny</ModalHeader>
          <ModalBody>
            {form}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
