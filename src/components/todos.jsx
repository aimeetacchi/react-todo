import React, { Component } from 'react';

export default class todos extends Component {
  
  render() {
    console.log(this.props.todo)
    return (
      <div>
          <h2>Your Todos</h2>
          {this.props.todo.todos.length === 0 ? <p>List is empty try adding a todo</p> : <ul>
        {
            this.props.todo.todos.map((todo, i) => (
                <li key={i} className={ this.props.todo.complete ? 'completed' : undefined }>
                  {todo.item}
                  <button onClick={()=> this.props.completeToDo(todo.id)}>
                    <i className="fas fa-check-circle"></i>
                  </button>
                  <button onClick={()=> this.props.removeToDo(i)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
            ))
           
        }
         </ul>}
          
      </div>
    )
  }
}
