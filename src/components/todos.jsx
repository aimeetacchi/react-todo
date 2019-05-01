import React, { Component } from 'react';

export default class todos extends Component {

  constructor(props){
    super(props)

    this.itemInput = React.createRef();
  }

   // UPDATE ITEM =====
   handleUpdate = e => { 
    e.preventDefault();
    //console.log(this.itemInput.current.value)
    
    this.props.updateItem(this.itemInput.current.value);
}

  render() {
    return (
      <div>
          <h2>Your Todos</h2>
          {this.props.data.todos.length === 0 ? <p>List is empty try adding a todo</p> : <ul>
        {
            this.props.data.todos.map((todo, i) => (
    
                <li key={i} >
                  
                    {/* Checking if you clicked Edit, shows the item added or a edit form */}
                    {this.props.data.todos[i].edit ?
                    
                    <form className="editItemForm" onSubmit={this.handleUpdate}>
                        <input
                        ref={this.itemInput}
                        text="text"
                        defaultValue={this.props.data.todos[i].item} />
                        <input
                        type="submit"
                        className="btn"
                        value="Update"/>
                    </form> 
                    : <div className={'item ' + (this.props.data.todos[i].complete ? 'completed' : '')}>
                          <span className={this.props.data.todos[i].edit ? 'hide' : 'show'}>
                            {todo.item}
                          </span>
                        </div>
                    }

                  
                  <div className="buttons">
                    

                    {/* EDIT TODO */}
                    <button onClick={
                      () => this.props.editToDo(todo.id)}>
                      {this.props.data.todos[i].edit ? <i className="fas fa-times"></i> : <i className="far fa-edit"></i>}
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
