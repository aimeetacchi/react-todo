import React, { Component } from 'react';

 class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        this.setState({newitem: this.props.todoObject.item})
    }


    onValueChange = (e) => {
        this.setState({newitem: e.target.value});
    }

    // UPDATE ITEM =====
    handleUpdate = e => { 
        e.preventDefault();
        
        const {id, complete, edit } = this.props.todoObject;

        let updateObject = {
            item: this.state.newitem,
            id,
            complete,
            edit,
        }
        // calling the updateItem function and passing in the new input value,
        this.props.updateItem(updateObject);
    }


  render() {

    // destructuring values from object.
    const {complete, edit, id, item} = this.props.todoObject;
    return (
        <li key={id} >      
        {/* Checking if you clicked Edit, shows the item added or a edit form */}
        {edit ?
        
        <form className="editItemForm" onSubmit={this.handleUpdate}>
            
            <input
            name="item"
            onChange={this.onValueChange}
            value={this.state.newitem}
            text="text"
             />

            <input
            type="submit"
            className="btn"
            value="Update"/>
        </form> 
        : <div className={'item ' + (complete ? 'completed' : '')}>
              <span className={edit ? 'hide' : 'show'}>
                {this.state.newitem}
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
        {/* <button onClick={()=> this.props.removeToDo(id, item)} className={edit ? 'hide' : 'show'}>
          <i className="fas fa-trash-alt"></i>
        </button> */}
      </div>

    </li>
    )
  }
}

export default Todo;
