import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import ViewContainer from '../containers/ViewContainer';
import { requestDeleteBoard } from '../utils/httpRequest';

export default class BoardViewPage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    console.log('this.context.router', this.context.router);
  }

  async deleteBoard() {
    const id = this.context.router.route.match.params.id;
    const result = await requestDeleteBoard(id);
    const success = result.data.success;

    if (success) {
      alert('삭제되었습니다.');

      this.context.router.history.push('/');
    }
  }

  render() {
    return (
      <Fragment>
        <ViewContainer id={this.context.router.route.match.params.id} />
        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => { this.context.router.history.push('/') }}>목록</button>
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => { this.context.router.history.push(`/update/${this.context.router.route.match.params.id}`) }}>수정</button>
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.deleteBoard.bind(this) }>삭제</button>
        </div>
      </Fragment>
    )
  }
}