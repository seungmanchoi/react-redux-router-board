import React, { Fragment, Component } from 'react';

export default class BoardListPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_list">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col" class="text-center">#</th>
                <th scope="col" class="text-center">제목</th>
                <th scope="col" class="text-center">작성자</th>
                <th scope="col" class="text-center">작성일</th>
                <th scope="col" class="text-center">조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="text-center">1</th>
                <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
                <td class="text-center">소보로</td>
                <td class="text-center">2018-08-02 20:50</td>
                <td class="text-center">77</td>
              </tr>
              <tr>
                <th scope="row" class="text-center">2</th>
                <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
                <td class="text-center">소보로</td>
                <td class="text-center">2018-08-02 20:50</td>
                <td class="text-center">77</td>
              </tr>
              <tr>
                <th scope="row" class="text-center">3</th>
                <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
                <td class="text-center">소보로</td>
                <td class="text-center">2018-08-02 20:50</td>
                <td class="text-center">77</td>
              </tr>
              <tr>
                <th scope="row" class="text-center">4</th>
                <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
                <td class="text-center">소보로</td>
                <td class="text-center">2018-08-02 20:50</td>
                <td class="text-center">77</td>
              </tr>
              <tr>
                <th scope="row" class="text-center">5</th>
                <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
                <td class="text-center">소보로</td>
                <td class="text-center">2018-08-02 20:50</td>
                <td class="text-center">77</td>
              </tr>
            </tbody>
          </table>

          <div id="pagination">
            {/* 1) <<, >>는 사용 불가시 li.disabled 추가
            2) [1], [2], [3]의 선택된 페이지는 li.active 추가 */}
            <nav aria-label="board pagination">
              <ul class="pagination float-right">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}