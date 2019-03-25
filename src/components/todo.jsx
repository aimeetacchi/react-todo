import React, { Component } from 'react';

export default class todo extends Component {
  render() {
    const {item, index} = this.props;
    return (
        <li>{index}: {item} <button onClick={()=> this.props.removeToDo(index, item)}>X</button></li>
    )
  }
}
