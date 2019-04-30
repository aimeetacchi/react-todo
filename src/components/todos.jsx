import React, { Component } from 'react';

export default class todos extends Component {
  
  render() {
  
    return (
      <div>
          <h2>Your Todos</h2>
          {this.props.data.todos.length === 0 ? <p>List is empty try adding a todo</p> : <ul>
        {
            this.props.data.todos.map((todo, i) => (
    
                <li key={i} className={this.props.data.todos[i].complete ? 'completed' : ''}>
                  
                    {/* Checking if you clicked Edit, shows the item added or a edit form */}
                    {this.props.data.todos[i].edit ?
                    
                    <form className="editItemForm" onSubmit={this.props.handleUpdate}>
                      <input ref="updateitem"  text="text" value={this.props.data.todos[i].item} />
                      <input type="submit" className="btn" value="Edit Todo"/>
                    </form> : <span className={'item ' + (this.props.data.todos[i].edit ? 'hide' : 'show')}>{todo.item}</span>}

                  
                  <div className="buttons">

                    {/* EDIT TODO */}
                    <button onClick={
                      () => this.props.editToDo(todo.id)}>                        {this.props.data.todos[i].edit ? <i className="fas fa-times"></i> : <i className="far fa-edit"></i>}
                    </button>

                    {/* COMPLETE TODO */}
                    <button className={this.props.data.todos[i].edit ? 'hide' : 'show'} onClick={()=> this.props.completeToDo(todo.id)}>
                      <i className="fas fa-check-circle"></i>
                    </button>

                    {/* DELETE TODO */}
                    <button className={this.props.data.todos[i].edit ? 'hide' : 'show'} onClick={()=> this.props.removeToDo(i)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>

                </li>
               
            ))
           
        }
         </ul>}
          
      </div>
    )
  }
}
