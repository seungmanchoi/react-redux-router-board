import React, { Fragment, Component } from 'react';

export default class BoardViewPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <table class="table table-bordered">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th scope="row">작성자</th>
                <td>소보로</td>
                <th>조회수</th>
                <td>77</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colspan="3">게시글 샘플 데이터 입니다.</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td colspan="3">안녕하세요. 소보로입니다</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="board_bottom" class="float-right">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-dark btn-sm">목록</button>
          </div>
          <div class="btn-group" role="group" aria-label="Second group">
            <button type="button" class="btn btn-outline-dark btn-sm">수정</button>
            <button type="button" class="btn btn-outline-dark btn-sm">삭제</button>
          </div>
        </div>
      </Fragment>
    )
  }
}