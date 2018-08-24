import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSelectBox(type, e) {
    const pageNum = this.props.list.pageNum;
    const pageSize = e.target.value;

    var param = '?'

    if ( pageNum ) {
      param += `page=${pageNum}&`;
    }

    if ( pageSize ) {
      param += `page_size=${pageSize}&`;
    }

    this.context.router.history.push(`/${param}`);
    this.props.getListData({ pageNum, pageSize });
  }

  render () {
    return (
      <div className="board_header clearfix">
        <div className="float-left">
          {/*page_size*/}
          <select onChange={this.handleSelectBox.bind(this, 'page_size')} value={ this.props.pageSize }>
            <option value='5'>5개씩 보기</option>
            <option value='10'>10개씩 보기</option>
            <option value='20'>20개씩 보기</option>
          </select>

          {/*blockCountPerPage*/}
          <select>
            <option value='5'>블럭수 5개</option>
            <option value='10'>블럭수 10개</option>
            <option value='15'>블럭수 15개</option>
          </select>

          {/*ordering*/}
          <select>
            <option>등록일 순</option>
            <option>조회수 순</option>
          </select>

          {/*sort*/}
          <select>
            <option>오름차순</option>
            <option>내림차순</option>
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
          <button type="button" className="btn btn-outline-primary btn-sm">등록</button>
        </div>
      </div>
    )
  }
}