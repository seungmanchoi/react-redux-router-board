import React, { Component, Fragment } from 'react';

export default class BoardUpdatePage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <form>
            <div className="form-group">
              <label for="title">제목</label>
              <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요." />
            </div>
            <div className="form-group">
              <label for="content">내용</label>
              <textarea id="content" className="form-control" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label for="title">작성자</label>
              <input type="text" className="form-control" id="user_name" placeholder="작성자명" disabled="disabled" />
            </div>
          </form>
        </div>
        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm">목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm">수정</button>
        </div>
      </Fragment>
    )
  }
}