import React, { Component, Fragment } from 'react';
import Create from '../components/Create';
import PropTypes from 'proptypes';
import { createBoard } from '../utils/httpRequest';
export default class BoardCreatePage extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      user_name: ''
    };
  }

  componentWillUnmount() {
    this.setState({
      title: '',
      content: '',
      user_name: ''
    })
  }

  updateFields(fieldName, value) {
    this.setState({
      [fieldName]: value
    });
  }

  async createBoard() {
    try {
      const { title, content, user_name } = this.state;
      const result = await createBoard({title, content, user_name});
      const success = result.data.success;

      if(success) {
        alert('등록되었습니다.');
        this.context.router.history.push('/');
      }
    } catch(e) {
      console.error('error!', e);
    }
  }

  render() {
    return (
      <Fragment>
        <Create
          title={ this.state.title }
          content={ this.state.content }
          user_name={ this.state.user_name }
          updateFields={ this.updateFields.bind(this) }/>

        <div id="board_bottom" className="float-right">
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={ () => { this.context.router.history.push('/list') } }>목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm"
                  onClick={ this.createBoard.bind(this) }>등록</button>
        </div>
      </Fragment>
    )
  }
}