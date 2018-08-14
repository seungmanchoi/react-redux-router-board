import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import UpdateContainer from '../containers/UpdateContainer';

export default class BoardUpdatePage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  updateBoard() {

  }

  render() {
    return (
      <Fragment>
        <UpdateContainer id={this.context.router.route.match.params.id} />
      </Fragment>
    )
  }
}