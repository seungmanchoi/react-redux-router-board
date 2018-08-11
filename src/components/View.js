import React, { Component, Fragment } from 'react';

export default class View extends Component {

  componentDidMount() {
    const id = this.props.id;
    
    this.props.getViewData(id);
    this.props.updateViewCount(id);
  }

  render () {
    return (
      <Fragment>
        <div id="board_content">
          <table className="table table-bordered">
            <tbody>
            <tr>
              <th scope="row">작성자</th>
              <td>{ this.props.view.user_name }</td>
              <th>조회수</th>
              <td>{ this.props.view.view_count }</td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td colSpan="3">{ this.props.view.title }</td>
            </tr>
            <tr>
              <th scope="row">내용</th>
              <td colSpan="3">{ this.props.view.content }</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}