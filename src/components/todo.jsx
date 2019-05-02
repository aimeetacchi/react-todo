import React, { Component } from 'react';

 class Todo extends Component {


    // UPDATE ITEM =====
    handleUpdate = e => { 
        e.preventDefault();
        // calling the updateItem function and passing in the new input value,

        //this.props.updateItem(newdata);
    }


  render() {

    // destructuring values from object.
    const {item, complete, edit, id} = this.props.todoObject;
    return (
        <li key={id} >      
        {/* Checking if you clicked Edit, shows the item added or a edit form */}
        {edit ?
        
        <form className="editItemForm" /*onSubmit={this.handleUpdate}*/>
            <input
            // ref={this.itemInput}
            text="text"
            defaultValue={item} />
            <input
            type="submit"
            className="btn"
            value="Update"/>
        </form> 
        : <div className={'item ' + (complete ? 'completed' : '')}>
              <span className={edit ? 'hide' : 'show'}>
                {item}
              </span>
            </div>
        }

      
      <div className="buttons">
        

        {/* EDIT TODO */}
        <button onClick={
          () => this.props.editToDo(id)}>
          {edit ? <i className="fas fa-times"></i> : <i className="far fa-edit"></i>}
        </button>

        {/* COMPLETE TODO */}
        <button onClick={()=> this.props.completeToDo(id)} className={edit ? 'hide' : 'show'} >
          <i className="fas fa-check-circle"></i>
        </button>

        {/* DELETE TODO */}
        <button onClick={()=> this.props.removeToDo(id)} className={edit ? 'hide' : 'show'}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>

    </li>
    )
  }
}

export default Todo;
