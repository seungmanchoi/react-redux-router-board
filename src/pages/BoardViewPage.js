import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import ViewContainer from '../containers/ViewContainer';

export default class BoardViewPage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <Fragment>
        <ViewContainer id={this.context.router.route.match.params.id} />
        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => { this.context.router.history.push('/') }}>목록</button>
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => { this.context.router.history.push(`/update/${this.context.router.route.match.params.id}`) }}>수정</button>
        </div>
      </Fragment>
    )
  }
}