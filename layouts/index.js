import React, { Component } from 'react';
import Head from './Head';
import Navbar from './Navbar'
import Footer from './Footer'


export default class extends Component {
  render() {
    return (
      <div id="App">
        <Head/>
        <Navbar url={this.props.url}/>
        
        {this.props.children}

        <Footer/>
      </div>
    );
  }
}