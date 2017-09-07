import React, { Component } from 'react';
import { Button
} from 'reactstrap';
import Router from 'next/router'
import _ from 'lodash'
import cuid from 'cuid'

import { deleteAt } from '../../api/firebase'
// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewsDelete extends Component {

  handleDelete = () => {
    deleteAt('news',this.props.id)
  }

  render() {
    const { user } = this.props
    if(_.get(user, 'admin') !== true) return <div/>
    return (
      <div id="NewsDelete">
        <Button color="danger" onClick={this.handleDelete}>Delete</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDelete)