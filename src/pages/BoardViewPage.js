import React, { Component, Fragment } from 'react';

export default class BoardViewPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <table className="table table-bordered">
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
              <td colspan="3">
                안녕하세요. 소보로입니다
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm">목록</button>
        </div>
      </Fragment>
    )
  }
}