import React, { Component } from 'react';
import _ from 'lodash'
import Head from 'next/head';
import Router from 'next/router'

class WebHead extends Component {

  render() {
    let title = 'Small World บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
    // if (Router.pathname==='/') title = 'Home Small World บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
    // if (Router.pathname==='/about') title = 'About เกี่ยวกับเราบริการพี่เลี้ยงเด็กสองภาษา'
    // if (Router.pathname==='/contact') title = 'Contact ติดต่อ กรุงเทพปริมณฑล บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
    // if (Router.pathname==='/service') title = 'Service บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
    // if (Router.pathname==='/user') title = 'Teacher&Nanny บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
    // if (Router.pathname==='/news') title = 'News ข่าวสารอัพเดท บริการเลี้ยงเด็กสองภาษา ครูพี่เลี้ยงทั่วกรุงเทพ'
      
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content="Smallworld บริการพี่เลี้ยงเด็ก ครูเลี้ยงเด็ก เด็กสองภาษา สอนภาษาอังกฤษ ในกรุงเทพและปริมนฑล"/>
        <meta name="keywords" content="พี่เลี้ยง,เด็ก,ฝากเลี้ยง,ดูแลเด็ก,ครู,เด็กเล็ก,โรงเรียน,สอนภาษาอังกฤษ,เด็กสองภาษา,school,kid,teacher" />
        <meta http-equiv="content-language" content="th" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/css/animate.css" rel="stylesheet" />
        <link href="/static/css/image-gallery.css" rel="stylesheet" />
        <link href="/static/css/styles.css" rel="stylesheet" />
        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
        
      </Head>
    );
  }
}

export default WebHead