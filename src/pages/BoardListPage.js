import React, { Component, Fragment } from 'react';
import ListTableContainer from '../containers/ListTableContainer';
import Pagination from '../components/Pagination'; // => PaginationContainer

export default class BoardListPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_list">
          <ListTableContainer />
        </div>

        <Pagination />
      </Fragment>
    )
  }
}