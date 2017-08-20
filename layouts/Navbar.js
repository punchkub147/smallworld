import React, { Component } from 'react';
import _ from 'lodash'

import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link'
import Modal from '../components/Modal'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

import FormSearch from '../components/FormSearch'

import { getUser, logout } from '../api/firebase'

export default class extends Component {
  state = {
    isOpen: false,
    user: {},
    dropdownOpen: false,
  };
  
  componentDidMount() {
    getUser(user => {
      this.setState({
        user,
      })
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    logout(error => {
      console.log(error)
    })
  }

  render() {
    const { user } = this.state
    const { url } = this.props
    const routes = [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/about',
        name: 'About',
      },
      {
        path: '/user',
        name: 'Teacher&Nanny',
      },
      {
        path: '/service',
        name: 'Services&Pricing',
      },
      {
        path: '/contact',
        name: 'Contact',
      },
    ]
    return (
      <div id="Navbar">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Small World</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {_.map(routes, route => 
              <NavItem>
                <div className="nav-link" id={route.path===url.pathname&&'active'}>
                  <Link prefetch href={route.path} >
                    <a>{route.name}</a>
                  </Link>
                </div>
              </NavItem>
            )}
              {/*<NavItem style={{'margin-right': '10px'}}>
                <FormSearch/>
          </NavItem>*/}

              {_.isEmpty(user)?
                <NavItem>
                  <Modal btnText="SignIn&SignUp" title="Sign In">
                    <FormLogin/>
                    <hr/>
                    <FormRegister/>
                  </Modal>
                </NavItem>
                :
                <NavDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem header>{/*user.email*/}</DropdownItem>
                    <DropdownItem>
                      <Link prefetch href="/profile/info">
                        Edit Profile
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.handleLogout}>
                      <Link prefetch href="/">
                        Logout
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </NavDropdown>

                // <NavItem>
                //   <Link prefetch href="/profile/info">
                //     <Button color="primary">Edit Profile</Button>
                //   </Link>
                // </NavItem>
                // <NavItem>
                //   <Button>Logout</Button>
                // </NavItem>
              }
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}