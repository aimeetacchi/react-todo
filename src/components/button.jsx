import React, { Component } from 'react';

 class Button extends Component {
  render() {
      const { func, name, nameClass } = this.props
    return (
        <button onClick={() => func()} className={nameClass}>{name}</button>
    )
  }
}

export default Button;