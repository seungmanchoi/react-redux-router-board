import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Create extends Component {

  static propTypes = {
    updateFields: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    user_name: PropTypes.string
  };

  constructor() {
    super();

    this.updateFields = ::this.updateFields;
  }

  updateFields(field, e) {
    const value = e.target.value;

    this.props.updateFields(field, value);
  }

  render () {
    return (
      <Fragment>
        <div id="board_content">
          <form>
            <div className="form-group">
              <label htmlFor="title">제목</label>
              <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요." onInput={ this.updateFields.bind(null, 'title') } value={ this.props.title } />
            </div>
            <div className="form-group">
              <label htmlFor="content">내용</label>
              <textarea id="content" className="form-control" rows="3" onInput={ this.updateFields.bind(null, 'content') } value={ this.props.content } ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="title">작성자</label>
              <input type="text" className="form-control" id="user_name" placeholder="작성자명" onInput={ this.updateFields.bind(null, 'user_name') } value={ this.props.user_name } />
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}