import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, 
  Label, Input, FormText, Card, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import Router from 'next/router'
import _ from 'lodash'
import styled from 'styled-components'


// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ButtonSearch = styled.button`
background: 0 0;
border-radius: 2px;
cursor: pointer;
display: block;
height: 60px;
line-height: 60px;
padding: 0 30px 0 25px;
position: relative;
transition: all .3s;
border: 2px solid #fff;
float:right;

letter-spacing: 2px;
text-transform: uppercase;
z-index: 0;

color: #fff;
overflow: hidden;
margin-top: 30px;

font-size: 18px;
:hover {
  background: #fff;
  color: #56ab2f;
}
`;

class FormSearch extends Component {
  state = { 
    salary: 'All',
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
    const { salary, ageRange, nationality, location, position, workTime, skill } = query
    this.setState({
      ...this.state,
      salary,
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
    const { salary, ageRange, nationality, location, position, workTime, skill } = this.state
    const query = {
      salary: salary?salary:'All',
      ageRange: ageRange?ageRange:'All',
      nationality: nationality?nationality:'All',
      location: location?location:'All',
      position: position?position:'All',
      workTime: workTime?workTime:'All',
      // skill: skill?skill:'All',
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
    const { messages } = this.props
    const { salary, ageRange, nationality, location, position, workTime, skill } = this.state

    //const selectSkill = ['Speak Thai','Speak English','Speak Chinese','Cook']
    const fullSelect = [
      {
        label: messages['Salary'],
        value: ['All','0 - 10,000','10,000 - 20,000','20,000 - 30,000','30,000+'],
        ref: 'salary',
      },
      {
        label: messages['Age range'],
        value: ['All','20 - 29','30 - 39','40 - 49','50+'],
        ref: 'ageRange',
      },
      {
        label: messages['Nationality'],
        value: ['All','Myanmar','Thai','Philippine','Laos','Cambodia'],
        ref: 'nationality',
      },
      {
        label: messages['Location'],
        value: ['All','Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui'],
        ref: 'location',
      },
      {
        label: messages['Position'],
        value: ['All','Maid&Nanny','Nursery','Teacher@Home'],
        ref: 'position',
      },
      {
        label: messages['Work Time'],
        value: ['All','Full Time','Part Time'],
        ref: 'workTime',
      },
    ]

    const form = (
      <Form onSubmit={this.handleSearch}>
        {/*<FormGroup row>
          <Label sm={3}>{messages['Salary']}</Label>
          <Col sm={9}>
            <Input type="search" placeholder="maximum salary"  onChange={(e) => this.setState({salary: e.target.value})}/>
          </Col>
        </FormGroup>*/}
      {_.map(fullSelect, select =>
        <FormGroup row>
          <Label sm={3}>{select.label}</Label>
          <Col sm={9}>
            <Input type="select" onChange={(e) => this.setState({[select.ref]: e.target.value})}>
            {_.map(select.value, val =>
              <option val={val} selected={this.state[select.ref] === val}>{val}</option>
            )}
          </Input>
          </Col>
        </FormGroup>
      )}
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
        <Button color="primary" size="lg" block onSubmit={this.handleSearch}>{messages['Search']}</Button>
      </Form>
    )

    return (
      <div id="Search">

        <ButtonSearch color="primary" onClick={this.openModal}>{messages['Search Nanny']}</ButtonSearch>
        
        <Modal isOpen={this.state.modal} toggle={this.openModal}>
          <ModalHeader toggle={this.openModal}>{messages['Search Nanny']}</ModalHeader>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch)