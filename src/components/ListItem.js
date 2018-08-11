import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';

export default class ListItem extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  linkToViewPage(id) {
    this.context.router.history.push(`/view/${id}`);
  }

  render () {
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td><a href={''} onClick={this.linkToViewPage.bind(this, this.props.id)}>{ this.props.title }</a></td>
          <td className="text-center">{ this.props.user_name }</td>
          <td className="text-center">{ this.props.created_at }</td>
          <td className="text-center">{ this.props.view_count }</td>
        </tr>
      </Fragment>
    )
  }
}