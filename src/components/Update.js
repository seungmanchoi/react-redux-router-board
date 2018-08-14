import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';

export default class Update extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
    }
  }

  componentDidMount() {
    const id = this.props.id;

    this.props.fetch(id);
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  changeContents(e) {
    this.setState({
      content: e.target.value
    });
  }

  updateBoard() {
    const id = this.props.id;
    const { title, content } = this.state;

    this.props.updateBoard({id, title, content});
  }

  render () {
    if(this.props.update.updated) {
      this.context.router.history.push(`/list`);
    }

    return (
      <Fragment>
        <div id="board_content">
          <form>
            <div className="form-group">
              <label for="title">제목</label>
              <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요." value={ this.state.title || this.props.update.title } onInput={ this.changeTitle.bind(this) } />
            </div>
            <div className="form-group">
              <label for="content">내용</label>
              <textarea id="content" className="form-control" rows="3" value={ this.state.content || this.props.update.content }></textarea>
            </div>
            <div className="form-group">
              <label for="title">작성자</label>
              <input type="text" className="form-control" id="user_name" placeholder="작성자명" disabled="disabled" value={this.props.update.user_name} />
            </div>
          </form>
        </div>
        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm">목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={ this.updateBoard.bind(this) }>수정</button>
        </div>
      </Fragment>
    )
  }
}