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
    const parsed = queryString.parse(this.context.router.route.location.search); // -> toJson
    const page = parsed.page || 1;
    const page_size = parsed.page_size;

    return (
      <Fragment>
        <div className="board_header clearfix">
          <div className="float-left">
            {/*page_size*/}
            <select>
              <option>5개씩 보기</option>
              <option>10개씩 보기</option>
              <option>20개씩 보기</option>
            </select>

            {/*blockCountPerPage*/}
            <select>
              <option>블럭수 5개</option>
              <option>블럭수 10개</option>
              <option>블럭수 15개</option>
            </select>

            {/*ordering*/}
            <select>
              <option>등록일 순</option>
              <option>조회수 순</option>
            </select>

            {/*sort*/}
            <select>
              <option>등록일 순</option>
              <option>조회수 순</option>
            </select>

            {/*search_condition*/}
            <select>
              <option>제목</option>
              <option>내용</option>
            </select>

            {/*search_value*/}
            <input type="text" />
            <button type="button">검색</button>
          </div>

          <div className="float-right">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={ this.gotoCreatePage }>등록</button>
          </div>
        </div>
        <div id="board_list">
          <ListTableContainer page={ page } pageSize={ page_size } />
        </div>
        <PaginationContainer page={ page } pageSize={ page_size } />
      </Fragment>
    )
  }
}