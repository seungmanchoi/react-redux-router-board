import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';

export default class Pagination extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.onClickBlock = ::this.onClickBlock;
    this.renderPrevPage = ::this.renderPrevPage;
    this.renderNextPage = ::this.renderNextPage;
  }

  getPaginationInfo() {
    /**
     * currerntPage - 현재 페이지
     * lastPage - 마지막 페이지
     * pageCountPerBlock - block당 보여질 page정보 갯수
     * blockStartPage - block의 첫 페이지 number
     * blockEndPage - block의 마지막 페이지 number
     * currentBlockNum - 현재 block의 number
     * lastBlockNum - 마지막 block의 number
     * */
    let currentPage = parseInt(this.props.list.pageNum);
    let totalCount = parseInt(this.props.list.totalCount);
    let pageSize = parseInt(this.props.list.pageSize);

    let lastPage = Math.ceil(totalCount / pageSize);
    let blockCountPerPage = this.props.list.blockCountPerPage;

    let blockStartPage = Math.ceil(currentPage / blockCountPerPage);
    let currentBlockNum = Math.ceil(currentPage / blockCountPerPage);
    let lastBlockNum = Math.ceil(lastPage / blockCountPerPage);
    let blockEndPage;

    blockStartPage = (blockStartPage - 1) * blockCountPerPage + 1;
    blockEndPage = currentBlockNum * blockCountPerPage > lastPage ? lastPage : currentBlockNum * blockCountPerPage//(blockStartPage + (blockCountPerPage - 1) > lastPage)? lastPage: blockStartPage + (blockCountPerPage - 1);

    return {
      currentPage,
      lastPage,
      blockCountPerPage,
      blockStartPage,
      blockEndPage,
      currentBlockNum,
      lastBlockNum,
      totalCount
    }
  }

  renderPrevPage() {
    const paginationInfo = this.getPaginationInfo();
    const { currentBlockNum, blockCountPerPage } = paginationInfo;

    if(currentBlockNum > 1) {
      //const pageNum = (currentBlockNum - 1) * blockCountPerPage - ( blockCountPerPage - 1 );
      const pageNum = (currentBlockNum - 1) * blockCountPerPage;

      return (
        <li className="page-item"><a className="page-link" href="#" onClick={ this.onClickBlock.bind(this, { pageNum }) }>Previous</a></li>
      )
    } else {
      return (
        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
      )
    }
  }

  renderNextPage() {
    const paginationInfo = this.getPaginationInfo();
    const { currentBlockNum, lastBlockNum, blockCountPerPage } = paginationInfo;

    if(lastBlockNum > currentBlockNum) {
      const pageNum = currentBlockNum * blockCountPerPage + 1;

      return (
        <li className="page-item"><a className="page-link" href="#" onClick={ this.onClickBlock.bind(this, { pageNum }) }>Next</a></li>
      )
    } else {
      return (
        <li className="page-item disabled"><a className="page-link" href="#">Next</a></li>
      )
    }
  }

  onClickBlock({ pageNum }) {
    var param = '?'

    if ( pageNum ) {
      param += `page=${pageNum}&`;
    }

    if (this.props.pageSize) {
      param += `page_size=${this.props.pageSize}&`;
    }

    this.context.router.history.push(`/${param}`);
    this.props.getBoardList({ pageNum, pageSize: this.props.pageSize });
  }

  render () {
    let paginationInfo = this.getPaginationInfo();
    let currentPage = paginationInfo.currentPage;
    let lastPage = paginationInfo.lastPage;

    return (
      <Fragment>
        <div id="pagination">
          <nav aria-label="board pagination">
            <ul className="pagination float-right">
              { this.renderPrevPage() }
              {
                (() => {
                  let pages = [];
                  let blockStartPage = paginationInfo.blockStartPage;
                  let blockEndPage = paginationInfo.blockEndPage;

                  //onClickPage
                  for(var i = blockStartPage, max = blockEndPage; i <= max; i += 1) {
                    if(currentPage === i) {
                      pages.push(<li key={ i } className="page-item active"><a className="page-link" href="#" onClick={ this.onClickBlock.bind(this, { pageNum: i }) }>{ i }</a></li>);
                    } else {
                      pages.push(<li key={ i } className="page-item"><a className="page-link" href="#" onClick={ this.onClickBlock.bind(this, { pageNum: i }) }>{ i }</a></li>);
                    }

                    if(lastPage === i) {
                      break;
                    }
                  }

                  return pages;
                })()
              }
              { this.renderNextPage() }
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}