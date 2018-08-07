import React, { Component, Fragment } from 'react';

export default class Pagination extends Component {
  render () {
    return (
      <Fragment>
        <div id="pagination">
          {/*<!--*/}
              {/*1) <<, >>는 사용 불가시 li.disabled 추가*/}
              {/*2) [1], [2], [3]의 선택된 페이지는 li.active 추가*/}
          {/*-->*/}
          <nav aria-label="board pagination">
            <ul className="pagination float-right">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}