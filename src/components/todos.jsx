import React, { Component } from 'react';

export default class todos extends Component {
  render() {
    return (
      <div>
          <h2>Your Todos</h2>
          {this.props.todo.todos.length === 0 ? <p>List is empty try adding a todo</p> : <ul>
        {
            this.props.todo.todos.map((todo, i) => (
                <li key={i}>
                  {todo} <button onClick={()=> this.props.removeToDo(i)}><i className="fas fa-trash-alt"></i></button>
                </li>
            ))
           
        }
         </ul>}
          
      </div>
    )
  }
}
