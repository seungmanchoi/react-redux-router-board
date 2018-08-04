import React, { Fragment, Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        { this.props.children }
      </Fragment>
    )
  }
}