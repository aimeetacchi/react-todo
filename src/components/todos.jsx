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
                  
                  <span className={'item ' + (this.props.data.todos[i].edit ? 'hide' : 'show')}>{todo.item}</span>
                  
                  <form className={'editItemForm ' + (this.props.data.todos[i].edit ? 'show' : 'hide')} onSubmit={this.props.handleUpdate}>
                    <input ref="updateitem"  text="text" value={this.props.data.todos[i].item} />
                    <input type="submit" className="btn" value="Edit Todo"/>
                  </form>
                  
                  <div className="buttons">

                    {/* EDIT TODO */}
                    <button onClick={
                      () => this.props.editToDo(todo.id)}>                        {this.props.data.todos[i].edit ? <i class="fas fa-times"></i> : <i className="far fa-edit"></i>}
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
