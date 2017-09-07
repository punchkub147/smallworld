import React, { Component } from 'react';
import _ from 'lodash'
import styled from 'styled-components'
import { color } from '../static/styles'
import { animate } from '../static/styles/animate'

import Head from './Head';
import Navbar from './Navbar'
import Footer from './Footer'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Home extends Component {
  render() {
    const { loading } = this.props
    return (
      <ID id="App">
        <Head/>
        
        <Navbar url={this.props.url}/>
        {loading
          ? <div>Loading</div>
          : <div className="app-content">
              {this.props.children}
              <Footer/>
            </div>
        }
      </ID>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const ID = styled.div`
  .app-content{
    animation: fadeIn 0.2s ease-in 0s 1 alternate;
  }
  ${animate.fadeIn}
`