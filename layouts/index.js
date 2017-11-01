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

const Loading = styled.div`

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`

class Home extends Component {
  render() {
    const { loading } = this.props
    return (
      <ID id="App">
        <Head/>
        
        <Navbar url={this.props.url}/>
        {loading
          ? <div className="loader"></div>
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