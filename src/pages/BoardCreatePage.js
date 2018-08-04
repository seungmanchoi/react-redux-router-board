import React, { Fragment, Component } from 'react';

export default class BoardCreatePage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <form>
            <fiedlset>
              <legend>글쓰기</legend>
              <div class="form-group">
                <label for="title">제목</label>
                <input type="text" class="form-control" id="title" placeholder="제목을 입력하세요." />
              </div>
              <div class="form-group">
                <label for="content">내용</label>
                <textarea id="content" class="form-control" id="content" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="title">작성자</label>
                <input type="text" class="form-control" id="user_name" placeholder="작성자명" />
              </div>
            </fiedlset>
          </form>
        </div>
        <div id="board_bottom" class="float-right">
          <button type="button" class="btn btn-outline-dark btn-sm">목록</button>
          <button type="button" class="btn btn-outline-primary btn-sm ml-1">등록</button>
        </div>
      </Fragment>
    )
  }
}