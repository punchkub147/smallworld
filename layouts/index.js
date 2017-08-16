import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header'

export default class extends Component {
  state = {  }
  render() {
    return (
      <div className="App">
        <Head>
          <title>Small World</title>
          
          <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/static/css/image-gallery.css" rel="stylesheet" />
          <link href="/static/css/styles.css" rel="stylesheet" />
          {/*
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
          */}
        </Head>

        <Header/>

        {this.props.children}

      </div>
    );
  }
}