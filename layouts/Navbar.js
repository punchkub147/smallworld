import React, { Component } from 'react';
import _ from 'lodash'
import styled from 'styled-components'
import { color } from '../static/styles'

import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Link from 'next/link'
import Modal from '../components/Modal'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

import FormSearch from '../components/FormSearch'

import { getUser, logout, getUserData } from '../api/firebase'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeLanguage, userLogin, didLoading } from '../store'

class MyNavbar extends Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
  };
  
  async componentDidMount() {
    const { messages, changeLanguage, userLogin, didLoading, user } = this.props
    
    if(_.isEmpty(messages)){
      await didLoading(true)
      await changeLanguage('th')
      await didLoading(false)
    }
    
    if(_.isEmpty(user)) {
      await didLoading(true)
      getUser(async user => {
        if(user){
          const userData = await getUserData(user.uid)
          userLogin(userData)
        } else {
          userLogin({})
        }
      })
      await didLoading(false)
    }
    
  }

  handleLogout = () => {
    logout(error => {
      console.log(error)
    })
  }

  render() {
    const { url, messages, user } = this.props
    const routes = [
      {
        path: '/',
        name: messages['Home'],
      },
      {
        path: '/about',
        name: messages['About'],
      },
      {
        path: '/news',
        name: messages['News'],
      },
      {
        path: '/user',
        name: messages['Teacher&Nanny'],
      },
      {
        path: '/service',
        name: messages['Services&Pricing'],
      },
      {
        path: '/contact',
        name: messages['Contact'],
      },
    ]
    return (
      <ID id="Navbar">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={() => this.setState({isOpen: !this.state.isOpen})} />
          <NavbarBrand href="/" style={{ color: '#b6d379'}}>Small World Service Center</NavbarBrand>
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
                {
                  // <Modal btnText="SignIn&SignUp" title="Sign In">
                  //   <FormLogin/>
                  //   <hr/>
                  //   <FormRegister/>
                  // </Modal>
                }
                </NavItem>
                :
                <NavDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem header>{/*user.email*/}</DropdownItem>
                    <DropdownItem>
                      <Link prefetch href="/profile/edit">
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

              }
              <NavItem>
                <div className="nav-link">
                  <a style={{cursor: 'pointer'}} onClick={() => this.props.changeLanguage('th')}>TH</a>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link">
                  <a style={{cursor: 'pointer'}} onClick={() => this.props.changeLanguage('en')}>EN</a>
                </div>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </ID>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: bindActionCreators(changeLanguage, dispatch),
    userLogin: bindActionCreators(userLogin, dispatch),
    didLoading: bindActionCreators(didLoading, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar)


const ID = styled.div`
  border-bottom: 10px solid ${color.sub};
  .login{
    color: red;
  }
  .nav-group{
    margin-right: 10px;
  }
  ul{
    li{
      a{
        text-decoration: none;
        color: ${color.textgray};
        text-align: center;
        box-sizing: border-box;
        transition: 0.15s ease-in;
      }
      a:hover{
        color: ${color.sub};
        text-shadow: -0.2px 0 ${color.sub}, 0 0.2px ${color.sub}, 0.2px 0 ${color.sub}, 0 -0.2px ${color.sub};
      }
    }
  }

  #active{
    a{
      color: ${color.sub};
      text-shadow: -0.2px 0 ${color.sub}, 0 0.2px ${color.sub}, 0.2px 0 ${color.sub}, 0 -0.2px ${color.sub};
    }
  }

  .dropdown-menu{
    right: 0;
  }
`