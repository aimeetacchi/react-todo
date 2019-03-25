import React, { Component } from 'react';
import Todo from '../components/todo';

export default class todos extends Component {
  render() {
    return (
      <div>
          <h2>Your Todos</h2>
          {this.props.todo.todos.length === 0 ? <p>List is empty try adding a todo</p> : <ul>
        {
            this.props.todo.todos.map((todo, i) => (
                <Todo removeToDo={this.props.removeToDo} key={i} item={todo} index={i}/>
            ))
           
        }
         </ul>}
          
      </div>
    )
  }
}
