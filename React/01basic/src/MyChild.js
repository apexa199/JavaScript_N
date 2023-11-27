import React, { Component } from 'react'

export default class MyChild extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.myItem.name}</td>
        <td>{this.props.myItem.email}</td>
      </tr>
    )
  }
}
