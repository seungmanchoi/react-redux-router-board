import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import ListTableContainer from '../containers/ListTableContainer';
import PaginationContainer from '../containers/PaginationContainer';
import queryString from 'query-string';
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
    const parsed = queryString.parse(this.context.router.route.location.search);
    const page = parsed.page || 1;
    const page_size = parsed.page_size;

    return (
      <Fragment>
        <div className="board_header float-right">
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={ this.gotoCreatePage }>등록</button>
        </div>
        <div id="board_list">
          <ListTableContainer page={ page } pageSize={ page_size } />
        </div>
        <PaginationContainer page={ page } pageSize={ page_size } />
      </Fragment>
    )
  }
}