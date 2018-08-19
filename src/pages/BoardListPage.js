import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import ListTableContainer from '../containers/ListTableContainer';
import PaginationContainer from '../containers/PaginationContainer';
// import Pagination from '../components/Pagination'; // => PaginationContainer

export default class BoardListPage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();

    this.gotoCreatePage = ::this.gotoCreatePage;
  }

  gotoCreatePage() {
    this.context.router.history.push(`/create`);
  }

  render() {
    console.log(this.context.router);
    // const page = this.context.router.route.location.query.page || "1";
    const page = "1";

    return (
      <Fragment>
        <div className="board_header float-right">
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={ this.gotoCreatePage }>등록</button>
        </div>
        <div id="board_list">
          <ListTableContainer />
        </div>
        <PaginationContainer page={ page } />
      </Fragment>
    )
  }
}